const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to DB
mongoose.connect(config.database);
//On Connection
mongoose.connection.on('connected', function () {
    console.log("Connected to DB " + config.database);
});
//On Error
mongoose.connection.on('error', function (err) {
    console.log("Database error " + err);
});

const app = express();

const admins = require('./routes/admins');
const students = require('./routes/students');
const mentors = require('./routes/mentors');
const subjects = require('./routes/subjects');
const online_resources = require('./routes/onlines');
const local_resources = require('./routes/locals');
const student_subject = require('./routes/student_subject');
const mentor_subject = require('./routes/mentor_subject');
const mentoring_meeting = require('./routes/mentoring_meeting');
const survey = require('./routes/surveys');

const port = 3000;
//Cors middleware
app.use(cors());

//Set static folders and files
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')));
}

// app.get('*', (request, response) => {
//     response.sendFile(path.join(__dirname, 'public'));
// });


//Body parser middleware
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/admins', admins);
app.use('/students', students);
app.use('/mentor_subjects', mentors);

//Subjects routes
app.use('/subjects', subjects);

app.use('/online-res', online_resources);
app.use('/local-res', local_resources);

app.use('/student-subject', student_subject);
app.use('/mentor-subject', mentor_subject);
app.use('/mentoring-meeting', mentoring_meeting);
app.use('/survey', survey);

//index routes
app.get('/', function (req, res) {
    res.send('Invalid 6');
});

app.set('port', process.env.PORT || 3000);

//Start server
app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port" + process.env.PORT);
});

"use strict";
const nodemailer = require("nodemailer");

app.post('/send-email', (req, res) => {
    console.log("send email", req.body.email);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'info@codetoinspire.org', // generated ethereal user
            pass: 'AfghanCode2015' // generated ethereal password
        },
        tls: {
            // rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    var studentMailOptions = {
        from: '"CTI" <info@codetoinspire.org>', // sender address
        to: req.body.s_email, // list of receivers
        subject: "Test Message for Student", // Subject line
        text: "This is a test message", // plain text body
        // html: "<b>Hello world?</b>" // html body
    };

    var mentorMailOptions = {
        from: '"CTI" <info@codetoinspire.org>', // sender address
        to: req.body.m_email, // list of receivers
        subject: "Test Message for Mentor", // Subject line
        text: "This is a test message", // plain text body
        // html: "<b>Hello world?</b>" // html body
    };

    var cmMailOptions = {
        from: '"CTI" <info@codetoinspire.org>', // sender address
        to: req.body.c_email, // list of receivers
        subject: "Test Message for Case Manager", // Subject line
        text: "This is a test message", // plain text body
        // html: "<b>Hello world?</b>" // html body
    };

    // send mail with defined transport object
    var info =  transporter.sendMail(studentMailOptions);
    var info2 =  transporter.sendMail(mentorMailOptions);
    var info3 =  transporter.sendMail(cmMailOptions);

    console.log("Message sent: %s", info.messageId);
    console.log("Message sent: %s", info2.messageId);
    console.log("Message sent: %s", info3.messageId);
    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

});
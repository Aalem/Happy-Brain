const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

//Register route
router.post('/register', function (req, res, next) {
    var newStudent = new Student({
        name: req.body.name,
        last_name: req.body.last_name,
        parents_name: req.body.parents_name,
        dob: req.body.dob,
        age: req.body.age,
        about_yourself: req.body.about_yourself,
        about_us: req.body.about_us,
        subjects: req.body.subjects,
        online_tutoring: req.body.online_tutoring,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        parents_phone: req.body.parents_phone,
        country: req.body.country,
        language: req.body.language,
        school_level: req.body.school_level,
        school_name: req.body.school_name,
        family_situation: req.body.family_situation,
        english_level: req.body.english_level,
        tutor_gender: req.body.tutor_gender,
        gender: req.body.gender,
        cm_name: req.body.cm_name,
        cm_email: req.body.cm_email,
        cm_phone: req.body.cm_phone,
        status: 'pending',
        deleted: 'no',
        type: 'student',
        address: req.body.address,
        mentoring_address: req.body.mentoring_address
    });
    Student.addStudent(newStudent, function (err, student) {
        if (err) {
            res.json({success: false, msg: 'Failed to register the student!'})
        } else {
            res.json({success: true, msg: 'Student registered!'})
        }
    });
});


//Authentication route
router.post('/authenticate', function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    Student.getStudentByEmail(email, function (err, student) {

        if (err) throw err;
        if (!student) {
            return res.json({success: false, msg: 'Student not found'});
        }
        Student.comparePassword(password, student.password, function (err, isMatch) {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(student.toJSON(), config.secret, {
                    expiresIn: 604800 //1Week

                });
                res.json({
                    success: "true",
                    token: 'JWT ' + token,
                    student: {
                        id: student._id,
                        name: student.name,
                        email: student.email,
                        type: student.type
                    }
                })
            }
            else {
                return res.json({success: false, msg: 'Wrong password or Email!'});

            }
        });
    });
});


//Profile route
router.get('/profile', passport.authenticate('jwt', {session: false}), function (req, res, next) {
    res.json({user: req.user})

});

router.get('/getStudents', function (req, res, next) {

    Student.find(function (err, students) {
        if (err) {
            res.send(err);
        }
        res.json(students);
    }).sort({_id: -1});

});

/* GET SINGLE Student BY ID */
router.get('/:id', function (req, res, next) {
    Student.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//Delete one student
router.delete('/:id', function (req, res, next) {
    Student.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


//Update one student
router.put('/:id', function (req, res, next) {
    Student.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);

    });
});


module.exports = router;
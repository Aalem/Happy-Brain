const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentor');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

var multer = require('multer');
var path = require('path');
var fs = require('fs');
var fileName;
var date;

var store = multer.diskStorage({

    destination:function(req,file,cb){
        cb(null, './uploads/wwcc');
    },
    filename:function(req,file,cb){
        fileName = Date.now()+'.'+file.originalname;
        cb(null, fileName);
    }
});


var upload = multer({storage:store}).single('file');

router.post('/upload', function(req,res,next){
    upload(req,res,function(err){
        if(err){
            return res.status(501).json({error:err});
        }
        //do all database record saving activity
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
    });
});


//Register route
router.post('/register',function (req,res,next) {
    var newMentor = new Mentor({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        language: req.body.language,
        vce_subjects:  req.body.vce_subjects,
        subjects:  req.body.subjects,
        location:  req.body.location,
        studying:  req.body.studying,
        experience:  req.body.experience,
        volunteering:  req.body.volunteering,
        wwcc:  req.body.wwcc,
        why_join: req.body.why_join,
        about_us: req.body.about_us,
        refugee_definition:  req.body.refugee_definition,
        preference:  req.body.preference,
        gender:  req.body.gender,
        send_me_copy:  req.body.send_me_copy,
        status:  'pending',
        deleted:  'no',
        type:  'mentor',
        wwcc_front:  req.body.wwcc_front,
        wwcc_back:  req.body.wwcc_back,
        assigned: false
    });
Mentor.addMentor(newMentor,function (err,mentor) {
    if(err){
        res.json({success:false,msg:'Failed to register the mentor!'})
    }else{
        res.json({success:true,msg:'Mentor registered!'})
    }
});
});



//Authentication route
router.post('/authenticate',function (req,res,next) {
    const email = req.body.email;
    const password = req.body.password;

    Mentor.getMentorByEmail(email,function (err,mentor) {

        if(err) throw err;
        if(!mentor){
            return res.json({success:false,msg:'Mentor not found'});
        }
        Mentor.comparePassword(password,mentor.password,function (err,isMatch) {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(mentor.toJSON(),config.secret,{
                    expiresIn:604800 //1Week

                });
                res.json({
                    success:"true",
                    token:'JWT '+token,
                    mentor:{
                        id:mentor._id,
                        name:mentor.name,
                        email:mentor.email,
                        type:mentor.type
                    }
                })
            }
            else{
                return res.json({success:false,msg:'Wrong password or Email!'});

            }
        });
    });
});


//Profile route
router.get('/profile',passport.authenticate('jwt',{session:false}),function (req,res,next) {
res.json({user:req.user})

});





router.get('/getMentors', function (req, res, next) {

    Mentor.find(function (err, mentors) {
        if (err) {
            res.send(err);
        }
        res.json(mentors);
    }).sort({_id: -1});

});


/* GET SINGLE Student BY ID */
router.get('/:id', function (req, res, next) {
    Mentor.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//Delete one student
router.delete('/:id', function (req, res, next) {
    Mentor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


//Update one student
router.put('/:id', function (req, res, next) {
    Mentor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);

    });
});



module.exports=router;
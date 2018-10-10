const express = require('express');
const router = express.Router();
const MentorSubject = require('../models/mentor_subject');
const mongoose = require('mongoose');

//Register route
router.post('/register', function (req, res, next) {
    var newMentorSubject = new MentorSubject({
        mentor_id: mongoose.Types.ObjectId(req.body.mentor_id),
        subjects: req.body.subjects
    });

    MentorSubject.addMentorSubject(newMentorSubject, function (err, mentor_subject) {
        if (err) {
            res.json({success: false, msg: 'Failed to select the mentor subject!'})
        } else {
            res.json({success: true, msg: 'You have selected your subjects.'})
        }
    });
});

router.get('/getMentorSubjects/:id', function (req, res, next) {

    MentorSubject.find({mentor_id: mongoose.Types.ObjectId(req.params.id)},function (err, mentor_subjects) {
        if (err) {
            res.send(err);
        }
        res.json(mentor_subjects);
    });

});

router.get('/getMentorSubjectsBySubjectId/:id', function (req, res, next) {
    MentorSubject.find({subjects: req.params.id},function (err, mentor_subjects) {
        if (err) {
            res.send(err);
        }
        res.json(mentor_subjects);
    });

    // MentorSubject.aggregate([
    //     {subjeects: mongoose.Types.ObjectId(req.params.id)}
    //     // {$lookup: {from: "mentors", localField: "mentor_id", foreignField: "_id", as: "mentor"}}
    // ],function (err, mentor_subject) {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(mentor_subject);
    // });

});


router.get('/getMentorAllSubjects', function (req, res, next) {

    MentorSubject.find(function (err, mentor_subjects) {
        if (err) {
            res.send(err);
        }
        res.json(mentor_subjects);
    }).sort({_id: -1});

});

/* GET SINGLE Student BY ID */
router.get('/:id', function (req, res, next) {
    MentorSubject.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//Delete one student
router.delete('/:id', function (req, res, next) {
    MentorSubject.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


//Update one student
router.put('/:id', function (req, res, next) {
    MentorSubject.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);

    });
});


module.exports = router;
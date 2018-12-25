const express = require('express');
const router = express.Router();
const Survey = require('../models/survey');
const mongoose = require('mongoose');

//Register route
router.post('/register', function (req, res, next) {
    var newSurvey = new Survey({
        student_subject: mongoose.Types.ObjectId(req.body.student_subject),
        student_id: mongoose.Types.ObjectId(req.body.student_id),
        mentor_id: mongoose.Types.ObjectId(req.body.mentor_id),
        subject_id: mongoose.Types.ObjectId(req.body.subject_id),
        date: req.body.date,
        comment: req.body.comment,
        rating: req.body.rating
    });

    Survey.addSurvey(newSurvey, function (err, survey) {
        if (err) {
            res.json({success: false, msg: ''})
        } else {
            res.json({success: true, msg: ''})
        }
    });
});

// router.get('/getMentoringMeetingCount/:id', function (req, res, next) {
//
//     MentoringMeeting.count({student_subject: mongoose.Types.ObjectId(req.params.id)},function (err, count) {
//         if (err) {
//             res.send(err);
//         }
//         res.json(count);
//     });
//
// });

//

router.get('/getSurveysByStudentSubject/:id', function (req, res, next) {
    Survey.find({student_subject: req.params.id},function (err, student_subjects) {
        if (err) {
            res.send(err);
        }
        res.json(student_subjects);
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

//
//
router.get('/getAllSurveys', function (req, res, next) {

    Survey.aggregate([
            // {$match: {status: "in_progress"}},
            {$lookup: {from: "students", localField: "student_id", foreignField: "_id", as: "student"}},
            {$lookup: {from: "mentors", localField: "mentor_id", foreignField: "_id", as: "mentor"}},
            {$lookup: {from: "subjects", localField: "subject_id", foreignField: "_id", as: "subject"}}
        ],
    function (err, surveys) {
        if (err) {
            res.send(err);
        }
        res.json(surveys);
    });

});
//
// /* GET SINGLE Student BY ID */
// router.get('/:id', function (req, res, next) {
//     MentorSubject.findById(req.params.id, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });
//
// //Delete one student
// router.delete('/:id', function (req, res, next) {
//     MentorSubject.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });
//
//
// //Update one student
// router.put('/:id', function (req, res, next) {
//     MentorSubject.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//
//     });
// });


module.exports = router;
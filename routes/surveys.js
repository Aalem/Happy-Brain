const express = require('express');
const router = express.Router();
const Survey = require('../models/survey');
const mongoose = require('mongoose');

//Register route
router.post('/register', function (req, res, next) {
    var newSurvey = new Survey({
        student_subject: mongoose.Types.ObjectId(req.body.student_subject),
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
// router.get('/getMentorSubjectsBySubjectId/:id', function (req, res, next) {
//     MentorSubject.find({subjects: req.params.id},function (err, mentor_subjects) {
//         if (err) {
//             res.send(err);
//         }
//         res.json(mentor_subjects);
//     });
//
//     // MentorSubject.aggregate([
//     //     {subjeects: mongoose.Types.ObjectId(req.params.id)}
//     //     // {$lookup: {from: "mentors", localField: "mentor_id", foreignField: "_id", as: "mentor"}}
//     // ],function (err, mentor_subject) {
//     //     if (err) {
//     //         res.send(err);
//     //     }
//     //     res.json(mentor_subject);
//     // });
//
// });
//
//
// router.get('/getMentorAllSubjects', function (req, res, next) {
//
//     MentorSubject.find(function (err, mentor_subjects) {
//         if (err) {
//             res.send(err);
//         }
//         res.json(mentor_subjects);
//     });
//
// });
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
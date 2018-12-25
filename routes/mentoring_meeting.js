const express = require('express');
const router = express.Router();
const MentoringMeeting = require('../models/mentoring_meeting');
const mongoose = require('mongoose');

//Register route
router.post('/register', function (req, res, next) {
    var newMentoringMeeting = new MentoringMeeting({
        student_subject: mongoose.Types.ObjectId(req.body.student_subject),
        date: req.body.date,
        section: req.body.section,
        session: req.body.session,
        duration: req.body.duration,
        comment: req.body.comment
    });

    MentoringMeeting.addMentoringMeeting(newMentoringMeeting, function (err, mentoring_meeting) {
        if (err) {
            res.json({success: false, msg: 'Failed to select the mentor subject!'})
        } else {
            res.json({success: true, msg: 'You have selected your subjects.'})
        }
    });
});

router.get('/getMentoringMeetingCount/:id', function (req, res, next) {

    MentoringMeeting.count({student_subject: mongoose.Types.ObjectId(req.params.id)}, function (err, count) {
        if (err) {
            res.send(err);
        }
        res.json(count);
    });

});

router.get('/getAllMentoringMeetings', function (req, res, next) {

    MentoringMeeting.aggregate([
        // {$match: {teacher_assigned: false}},
        {
            $lookup: {
                from: "studentsubjects",
                localField: "student_subject",
                foreignField: "_id",
                as: "student_subjects"
            }
        },
        {
            $unwind: {
                path: "$student_subjects",
                preserveNullAndEmptyArrays: true
            }
        },

        {
            $lookup:
                {
                    from: "students",
                    localField: "student_subjects.student_id",
                    foreignField: "_id", as: "student_subjects.student"
                }
        },
        {
            $lookup:
                {
                    from: "mentors",
                    localField: "student_subjects.mentor_id",
                    foreignField: "_id", as: "student_subjects.mentor"
                }
        },

        {
            $lookup:
                {
                    from: "subjects",
                    localField: "student_subjects.subject_id",
                    foreignField: "_id", as: "student_subjects.subject"
                }
        }
    ], function (err, mentor_subject) {
        if (err) {
            res.send(err);
        }
        res.json(mentor_subject);
    });

});

module.exports = router;
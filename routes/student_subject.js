const express = require('express');
const router = express.Router();
const StudentSubject = require('../models/student_subject');
const mongoose = require('mongoose');

//Register route
router.post('/register', function (req, res, next) {
    var newStudentSubject = new StudentSubject({
        student_id: req.body.student_id,
        subject_id: req.body.subject_id,
        mentor_id: req.body.mentor_id,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        teacher_assigned: false,
        status: 'pending'
    });

    StudentSubject.addStudentSubject(newStudentSubject, function (err, student_subject) {
        if (err) {
            res.json({success: false, msg: 'Failed to register the student subject!'})
        } else {
            res.json({success: true, msg: 'Student subject added!'})
        }
    });
});

router.get('/getStudentSubjects/:id', function (req, res, next) {

    StudentSubject.find({student_id: req.params.id}, function (err, student_subjects) {
        if (err) {
            res.send(err);
        }
        res.json(student_subjects);
    }).sort({_id: -1});

});

router.get('/getStudentSubjectsByMentor/:id', function (req, res, next) {

    StudentSubject.find({mentor_id: req.params.id}, function (err, student_subjects) {
        if (err) {
            res.send(err);
        }
        res.json(student_subjects);
    });

});

router.get('/getStudentSubjectsByStudentId/:id', function (req, res, next) {
    StudentSubject.aggregate([
        {$match: {student_id: mongoose.Types.ObjectId(req.params.id)}},
        {$lookup: {from: "mentors", localField: "mentor_id", foreignField: "_id", as: "mentor"}},
        {$lookup:
                {from: "mentoringmeetings",
                    let: {id: "$_id"},
                    pipeline: [
                        {$match:
                                {$expr:
                                        {$eq: ["$student_subject", "$$id"]}
                                },
                        },
                        {$sort: {session: -1}},
                        {$limit: 1},
                        {$project: {id: 0}}
                    ],
                    as: "mentoringmeeting"
                }
        },
        {$lookup: {from: "subjects", localField: "subject_id", foreignField: "_id", as: "subject"}}
    ], function (err, student_subjects) {
        if (err) {
            res.send(err);
        }
        res.json(student_subjects);
    });

});

router.get('/getStudentSubjectsByMentorId/:id', function (req, res, next) {

    StudentSubject.aggregate([
        {$match: {mentor_id: mongoose.Types.ObjectId(req.params.id)}},
        {$lookup: {from: "students", localField: "student_id", foreignField: "_id", as: "student"}},
        {$lookup:
            {from: "mentoringmeetings",
                let: {id: "$_id"},
                pipeline: [
                    {$match:
                        {$expr:
                            {$eq: ["$student_subject", "$$id"]}
                        },
                    },
                    {$sort: {session: -1}},
                    {$limit: 1},
                    {$project: {id: 0}}
                ],
                as: "mentoringmeeting"
            }
        },
        {$lookup: {from: "subjects", localField: "subject_id", foreignField: "_id", as: "subject"}}
    ], function (err, mentor_subject) {
        if (err) {
            res.send(err);
        }
        res.json(mentor_subject);
    });

});

router.get('/getStudentSubjectsById/:id', function (req, res, next) {

    StudentSubject.aggregate([
        {$match: {_id: mongoose.Types.ObjectId(req.params.id)}},
        {$lookup: {from: "students", localField: "student_id", foreignField: "_id", as: "student"}},
        {$lookup: {from: "mentors", localField: "mentor_id", foreignField: "_id", as: "mentor"}},
        {$lookup: {from: "subjects", localField: "subject_id", foreignField: "_id", as: "subject"}}
    ], function (err, student_subject) {
        if (err) {
            res.send(err);
        }
        res.json(student_subject);
    });

});


router.get('/getStudentSubjects', function (req, res, next) {

    StudentSubject.find(function (err, student_subjects) {
        if (err) {
            res.send(err);
        }
        res.json(student_subjects);
    }).sort({_id: -1});

});

router.get('/getUnassignedStudentSubjects', function (req, res, next) {
    StudentSubject.aggregate([
        {$match: {teacher_assigned: false}},
        {$lookup: {from: "students", localField: "student_id", foreignField: "_id", as: "student"}},
        {$lookup: {from: "subjects", localField: "subject_id", foreignField: "_id", as: "subject"}}
    ], function (err, mentor_subject) {
        if (err) {
            res.send(err);
        }
        res.json(mentor_subject);
    });

});

router.get('/getStudentSubjectsInProgress', function (req, res, next) {
    StudentSubject.aggregate([
        {$match: {status: "in_progress", teacher_assigned: true}},
        {$lookup: {from: "students", localField: "student_id", foreignField: "_id", as: "student"}},
        {$lookup: {from: "mentors", localField: "mentor_id", foreignField: "_id", as: "mentor"}},
        {$lookup: {from: "subjects", localField: "subject_id", foreignField: "_id", as: "subject"}}
    ], function (err, mentor_subject) {
        if (err) {
            res.send(err);
        }
        res.json(mentor_subject);
    });

});

router.get('/getStudentSubjectsByStudentAndMentor/:ids', function (req, res, next) {
    const student_id = req.params.ids.split('-')[0];
    const mentor_id = req.params.ids.split('-')[1];

    StudentSubject.aggregate([
        {$match: {student_id: mongoose.Types.ObjectId(student_id), mentor_id: mongoose.Types.ObjectId(mentor_id)}},
        {$lookup: {from: "students", localField: "student_id", foreignField: "_id", as: "student"}},
        {$lookup: {from: "mentors", localField: "mentor_id", foreignField: "_id", as: "mentor"}},
        {$lookup: {from: "subjects", localField: "subject_id", foreignField: "_id", as: "subject"}}
    ], function (err, mentor_subject) {
        if (err) {
            res.send(err);
        }
        res.json(mentor_subject);
        console.log(""+mentor_subject[0]._id);
    });
});

router.get('/getAllStudentSubjects', function (req, res, next) {
    StudentSubject.aggregate([
        {$lookup: {from: "students", localField: "student_id", foreignField: "_id", as: "student"}},
        {$lookup: {from: "mentors", localField: "mentor_id", foreignField: "_id", as: "mentor"}},
        {$lookup: {from: "subjects", localField: "subject_id", foreignField: "_id", as: "subject"}},
        {$group:{_id:{student_id:"$student_id", mentor_id: "$mentor_id"}, data:{$push: {mentor:"$mentor", student:"$student", subject:"$subject"}}}}
    ], function (err, mentor_subject) {
        if (err) {
            res.send(err);
        }
        res.json(mentor_subject);
    });
});

// router.get('/getAllStudentSubjects', function (req, res, next) {
//     StudentSubject.aggregate([
//         // {$match: {status: "in_progress"}},
//         {$lookup: {from: "students", localField: "student_id", foreignField: "_id", as: "student"}},
//         {$lookup: {from: "mentors", localField: "mentor_id", foreignField: "_id", as: "mentor"}},
//         {$lookup: {from: "subjects", localField: "subject_id", foreignField: "_id", as: "subject"}}
//     ], function (err, mentor_subject) {
//         if (err) {
//             res.send(err);
//         }
//         res.json(mentor_subject);
//     });
// });

/* GET SINGLE Student BY ID */
router.get('/:id', function (req, res, next) {
    StudentSubject.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//Delete one student
router.delete('/:id', function (req, res, next) {
    StudentSubject.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//Update one student
router.put('/:id', function (req, res, next) {
    StudentSubject.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);

    });
});

router.put('/unmatch/:id', function (req, res, next) {
    StudentSubject.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);

    });
});


module.exports = router;
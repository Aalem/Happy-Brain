const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Student Subject Schema
const MentoringMeetingSchema = mongoose.Schema({
    student_subject: {
        type: mongoose.Schema.Types.ObjectId
    }, date: {
        type: String
    }, section: {
        type: String
    }, session: {
        type: String
    }, duration: {
        type: String
    }, comment: {
        type: String
    }
});


// db.studentsubjects.aggregate([
//     {
//         $lookup:
//             {
//                 from: "mentoringmeetings",
//                 let: {id: "$_id"},
//                 pipeline: [
//                     {
//                         $match:
//                             {
//                                 $expr:
//                                     {
//                                         $eq: ["$student_subject", "$$id"]
//                                     }
//                             },
//                     },
//                     {$limit: 1},
//                     {$sort: {section: -1}},
//                     {$project: {id: 0}}
//                 ],
//                 as: "mentoringmeeting"
//             }
//     }
// ])

const MentoringMeeting = module.exports = mongoose.model('MentoringMeeting', MentoringMeetingSchema);


module.exports.addMentoringMeeting = function (MentoringMeeting, callback) {
    MentoringMeeting.save(callback);
};
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Student Subject Schema
const StudentSubjectSchema = mongoose.Schema({
    student_id: {
        type: mongoose.Schema.Types.ObjectId
    }, subject_id: {
        type: mongoose.Schema.Types.ObjectId
    }, mentor_id: {
        type: mongoose.Schema.Types.ObjectId
    }, start_date: {
        type: String
    }, end_date: {
        type: String
    }, teacher_assigned: {
        type: Boolean
    }
});


const StudentSubject = module.exports = mongoose.model('StudentSubject', StudentSubjectSchema);


module.exports.addStudentSubject = function (StudentSubject, callback) {
    StudentSubject.save(callback);
}
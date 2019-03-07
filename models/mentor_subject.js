const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Mentor Subject Schema
const MentorSubjectSchema = mongoose.Schema({
    mentor_id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },
    subjects: {
        type: Array
    }
});


const MentorSubject = module.exports = mongoose.model('MentorSubject', MentorSubjectSchema);

module.exports.addMentorSubject = function (MentorSubject, callback) {
    MentorSubject.save(callback);
}
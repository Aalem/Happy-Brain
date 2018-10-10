const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Student Subject Schema
const SurveySchema = mongoose.Schema({
    student_subject: {
        type: mongoose.Schema.Types.ObjectId
    }, date: {
        type: String
    }, comment: {
        type: String
    }, rating: {
        type: String
    }
});


const Survey = module.exports = mongoose.model('Survey', SurveySchema);


module.exports.addSurvey = function (Survey, callback) {
    Survey.save(callback);
};
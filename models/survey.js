const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Student Subject Schema
const SurveySchema = mongoose.Schema({
    student_subject: {
        type: mongoose.Schema.Types.ObjectId
    },student_id: {
        type: mongoose.Schema.Types.ObjectId
    },mentor_id: {
        type: mongoose.Schema.Types.ObjectId
    },subject_id: {
        type: mongoose.Schema.Types.ObjectId
    }, date: {
        type: String,
        required: true
    }, comment: {
        type: String,
        required: true
    }, rating: {
        type: String,
        required: true
    }
});


const Survey = module.exports = mongoose.model('Survey', SurveySchema);


module.exports.addSurvey = function (Survey, callback) {
    Survey.save(callback);
};
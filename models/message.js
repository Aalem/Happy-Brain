const mongoose = require('mongoose');

// Message  Schema
const MessageSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String
    },

    date: {
        type: String
    },
    seen: {
        type: Boolean
    },
    deleted: {
        type: Boolean
    },
    user: {
        type: String
    }
});

const Message = module.exports = mongoose.model('Message', MessageSchema);

module.exports.getMessageResById = function (id, callback) {
    Message.findById(id, callback);
}

module.exports.addMessageRes = function (newMessage, callback) {
    newMessage.save(callback);
}


const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Message = require('../models/message');

//Register route
router.post('/register', function (req, res, next) {
    const date = new Date();
    console.log(date);
    var newMessage = new Message({
        title: req.body.title,
        message: req.body.message,
        date: date.toDateString() + ' ' + date.toLocaleTimeString(),
        seen: false,
        user: req.body.user,
        deleted: false
    });

    Message.addMessageRes(newMessage, function (err, message) {
        if (err) {
            res.json({success: false, msg: 'Failed to add message!'})
        } else {
            res.json({success: true, msg: 'message added!'})
        }
    });
});


router.get('/getAll', function (req, res, next) {

    Message.find(function (err, messages) {
        if (err) {
            res.send(err);
        }
        res.json(messages);
    }).sort({_id: -1});

});

router.get('/getNotificationsByUserId/:id', function (req, res, next) {

    Message.find(
        {user: req.params.id=='1'?req.params.id:mongoose.Types.ObjectId(req.params.id)},
        function (err, messages) {
        if (err) {
            res.send(err);
        }
        res.json(messages);
    }).sort({_id: -1});

});


router.get('/countNotificationsByUserId/:id', function (req, res, next) {

    Message.count({user:req.params.id=='1'?req.params.id: mongoose.Types.ObjectId(req.params.id), seen:false},
        function (err, count) {
        if (err) {
            res.send(err);
        }
        res.json(count);
    });

});

router.get('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function (req, res, next) {
    Message.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


//Update one subject
router.put('/:id', function (req, res, next) {
    Message.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
/**
 * Created by Amelia on 10/7/15.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var assignments = require('../models/assignments');

router.get('/getAssignment', function(req, res, next){
    assignments.find(function(err, assignment){
        res.json(assignment);
    })
});

router.post('/addAssignment', function(req, res, next){
    console.log(req.body);
    assignments.create(req.body, function(err, post){
        res.send('all good');
    })
});

module.exports = router;
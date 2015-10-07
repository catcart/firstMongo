/**
 * Created by Amelia on 10/7/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    assignment_number : Number,
    student_name : String,
    score : Number,
    date_completed : Date
});

var assignments = mongoose.model('assignments', studentSchema);

module.exports = assignments;
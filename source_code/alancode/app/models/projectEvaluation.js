// grab the packages that we need for the user model
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// user schema
var EvaluationSchema = new Schema({
    studentName: 	    {type: String, required: true},
    studentEmail: 	    {type: String, required: true},
    subjectTitle: 	    {type: String, required: true},
    feedbackMessage: 	{type: String, required: true}
});

//return the model
module.exports = mongoose.model('Evaluation', EvaluationSchema);
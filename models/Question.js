const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    answer: {type: String, required:false},
    mcq:{type:Boolean,  required:false},
    mcqAnswer: {type:String, required:false},
    options: {}
}, {timestamps: true})


export default mongoose.models.Question || mongoose.model('Question', QuestionSchema)
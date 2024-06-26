const mongoose = require('mongoose');

const MockPaperSchema = new mongoose.Schema({
    name: {type:String, required:true},
    title:{type:String,required:true},
    questions: [],
    time: {type:Number, required:true} ,
    desc:{type:String, requried:true},
    examRelated: {type:String, required:true},
}, {timestamps: true})


export default mongoose.models.MockPaper || mongoose.model('MockPaper', MockPaperSchema)
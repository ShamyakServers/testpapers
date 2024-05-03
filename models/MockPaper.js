const mongoose = require('mongoose');

const MockPaperSchema = new mongoose.Schema({
    title:{type:String,required:true},
    questions: [],
    price:{type:String, requried:true},
    time: {type:Number, required:true} ,
    desc:{type:String, requried:true},
    examRelated: {type:String, required:true},
}, {timestamps: true})


export default mongoose.models.MockPaper || mongoose.model('MockPaper', MockPaperSchema)
const mongoose = require('mongoose');

const TestPapersSchema = new mongoose.Schema({
    title: {type:String,required:true},
    subject: {type:String, required:true},
    questions: [],
    questionsnum: {type: Number, required:true},
    note: {type:String,required:true},
    userAssociated: {type:String,required:true}
}, {timestamps:true});
export default mongoose.models.Note || mongoose.model('TestPaper', TestPapersSchema)
const mongoose = require("mongoose")

const TestPaperSchema = new mongoose.Schema({
    title: {type:String, required:true}
}, {timestamps:true})
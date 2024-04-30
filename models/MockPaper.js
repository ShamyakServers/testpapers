const mongoose = require('mongoose');

const MockPaperSchema = new mongoose.Schema({
    questions: [],
}, {timestamps: true})


export default mongoose.models.MockPaper || mongoose.model('MockPaper', MockPaperSchema)
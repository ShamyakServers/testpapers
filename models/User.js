const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        default: 'YOUR-NAME-HERE'
    },
    email: {
        type:String,
        required:true,
    },
    phone:{type:Number,required:false},
    address:{type:String, required:false},
    pincode:{type:String, required:false},
    password:{
        type:String,
        required:true
    },
    TestPapersPublished:[],
    TestPapersPublishednum:{
        type:Number,
        default: 0
    },
    isProUser:{
        type: Boolean,
        default: false
    },
    TestPapersBoughtnum:{
        type: Number,
        default: 0
    },
    TestPapersBought:[],
    isVerified:{
        type: Boolean,
        default: false
    },
    mailAddress:{
        type:String
    },
    isLoginFirstTime:{
        type : Boolean
    },
    disable:{
        type: Boolean,
        default: false
    },

}, {timestamps: true})

export default mongoose.models.User || mongoose.model('User', UserSchema)
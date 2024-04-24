import mongoose from 'mongoose';

const issuesSchema = mongoose.Schema({
    issuer:{
        type:String,
        required:true,
    },
    tags:{
        type:[String]
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
    description:{
        type:String,
        required:true
    },
    note:{
        type:String
    },
    closed:{
        type:Boolean,
        required:true,
        default:false
    },
    urgent:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamps:true
});

const Issues= mongoose.model('Issues',issuesSchema);

export default Issues;


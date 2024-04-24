import mongoose from 'mongoose';

const reviewFormatSchema = mongoose.Schema({
    criterion01:{
        id: {type:String, required:true, default:"C001"},
        body: {type:String},
        enabled:{type:Boolean, required:true, default:false}
    },
    criterion02:{
        id: {type:String, required:true, default:"C002"},
        body: {type:String},
        enabled:{type:Boolean, required:true, default:false}
    },
    criterion03:{
        id: {type:String, required:true, default:"C003"},
        body: {type:String},
        enabled:{type:Boolean, required:true, default:false}
    },
    criterion04:{
        id: {type:String, required:true, default:"C004"},
        body: {type:String},
        enabled:{type:Boolean, required:true, default:false}
    },
    criterion05:{
        id: {type:String, required:true, default:"C005"},
        body: {type:String},
        enabled:{type:Boolean, required:true, default:false}
    },
    criterion06:{
        id: {type:String, required:true, default:"C006"},
        body: {type:String},
        enabled:{type:Boolean, required:true, default:false}
    },
    criterion07:{
        id: {type:String, required:true, default:"C007"},
        body: {type:String},
        enabled:{type:Boolean, required:true, default:false}
    },
    criterion08:{
        id: {type:String, required:true, default:"C008"},
        body: {type:String},
        enabled:{type:Boolean, required:true, default:false}
    },
    criterion09:{
        id: {type:String, required:true, default:"C009"},
        body: {type:String},
        enabled:{type:Boolean, required:true, default:false}
    },
    criterion10:{
        id: {type:String, required:true, default:"C010"},
        body: {type:String},
        enabled:{type:Boolean, required:true, default:false}
    },
},{
    timestamps:true
});

const ReviewFormat= mongoose.model('ReviewFormat',reviewFormatSchema);

export default ReviewFormat;


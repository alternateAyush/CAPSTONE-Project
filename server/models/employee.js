import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    empId:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobRole:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        enum:['IT','Accounting','Marketing','HR','Sales'],
        required:true,
    },
    dob:{
        type:Date,
        required:true,
    },
    doj:{
        type:Date,
        required:true,
    },
    imgUrl:{
        type:String,
    }
},{
    timestamps:true
});

const Employee= mongoose.model('Employee',employeeSchema);

export default Employee;


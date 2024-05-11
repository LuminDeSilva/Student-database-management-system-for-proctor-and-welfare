const mongoose=require("mongoose");

const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    registrationNumber:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    faculty:{
        type:String,
        required:true
    },
    yearofStudy:{
        type:Number,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
});

module.exports=mongoose.model("student",StudentSchema);

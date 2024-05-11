const mongoose=require("mongoose");
const db="mongodb://localhost:27017/unidatabase"

mongoose.set("strictQuery",true,"useNewUrlParser",true);

const connectDB=async()=>{
    try{
        await mongoose.connect(db);
        console.log("MongoDB connected");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports=connectDB;
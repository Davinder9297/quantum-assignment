const mongoose=require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.ed9lgev.mongodb.net/");
const ourschema=new mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    dob:{
        type:String
    },
    password:{
        type:String
    },
    date:{
        type:String,        
        default:new Date().toDateString()
    },
    
   
});
const registeration=new mongoose.model("registerationdata",ourschema)
module.exports=registeration;

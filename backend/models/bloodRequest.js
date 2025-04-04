const mongoose=require("mongoose");
const bloodReq=new mongoose.Schema({
       name:{type:String,required:true},
        age:{type:Number,required:true},
        email:{type:String,required:true},
        phone:{type:Number,required:true},
        city:{type:String,required:true},
        bloodGroup:{type:String,required:true},
        status: { type: String, default: "Pending" },
})
const BloodRequest=mongoose.model("BloodRequest",bloodReq);
module.exports=BloodRequest;

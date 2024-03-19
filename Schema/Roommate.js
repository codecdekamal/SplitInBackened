const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const RoomMateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    age:{
        type:Number,
        required:true,
        min:18,
        max:60
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]   
     },
     eatingHabit:{
        type:String,
        required:true,
        enum:["veg","non-veg"]
     },
     property:{
        type:ObjectId,
        required:true,
        ref:"Properties"
     }
},{timestamps:true})
module.exports = new mongoose.model("RoomMate",RoomMateSchema)
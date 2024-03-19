const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const PropertiesSchema = new mongoose.Schema({
    location:{
        type:String,
        required:true,
        trim:true,
    },
    budget:{
        type:Number,
        required:true,
        min:0
    },
     size:{
        type:Number,
        required:true
     },
     roommates:{
        type:[ObjectId],
        validate: [(value) => value.length <=5, 'Room is full'],
        ref:"RoomMate",  
     }
},{timestamps:true,
    validateBeforeSave:true
})
module.exports = new mongoose.model("Properties",PropertiesSchema)
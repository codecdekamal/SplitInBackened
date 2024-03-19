const mongoose = require("mongoose");
const connectDb = async (url) =>{
    try {
        await mongoose.connect(url,{
            maxPoolSize:10
        })
        console.log("conecteddb")
    } catch (error) {
        console.log(error)
    }
}
module.exports = {connectDb}
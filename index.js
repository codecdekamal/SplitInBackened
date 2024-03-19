const express = require("express");
const app = express();
require("dotenv").config();
const {connectDb} = require("./db/connect")
const PropertyRouter = require("./Router/PropertiesRouter")
const RoommateRouter = require("./Router/RoommateRouter")
app.use(express.json());
const MyPort = process.env.MY_PORT;
const MONGODB_URL = process.env.MongoDbURI;
app.use("/api/v1/properties",PropertyRouter);
app.use("/api/v1/roommate",RoommateRouter);
const start = async () =>{
    await connectDb(MONGODB_URL)
    app.listen(MyPort,()=>{
        console.log(`app is running at port ${MyPort}....`)
    })
}
start();

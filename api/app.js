import express from "express"
import bodyParser from "body-parser";

import userRouter from "./userrouter/userrouter.js"
const app=express();



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))




app.use("/user",userRouter)



app.listen(3001);
console.log("server invoked at http://localhost:3001 port")
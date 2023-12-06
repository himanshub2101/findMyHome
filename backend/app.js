import express from "express"
import bodyParser from "body-parser"
import userRouter from "./registration/router/user.router.js"
import messRouter from "./mess_facility/router/mess.router.js"
const app=express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Replace with your frontend origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/user",userRouter)
app.use("/mess",messRouter)



app.listen(3001)
console.log("server invoked at port 3001")
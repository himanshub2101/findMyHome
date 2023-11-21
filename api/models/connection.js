import mongoose from "mongoose"
const url="mongodb://127.0.0.1:27017/lrit"
mongoose.connect(url);
console.log("mongodb connected succesfully")
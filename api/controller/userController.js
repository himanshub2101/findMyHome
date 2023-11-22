import "../models/connection.js"
import userSchemaModel from "../models/userSchema.js"
import jwt from "jsonwebtoken"
import rs from "randomstring"
import config from "../config/config.js"
import bcryptjs from "bcryptjs"
import sendEmail1 from "./email.forgotpassword.js"
import sendEmail from "./email.controller.js"
import url from "url"

const createToken = async (id) => {
    try {
        const token = jwt.sign({ _id: id }, config.secrete_Key)

        return token;
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const securePassword = async (password) => {
    try {
        const passwordHash = await bcryptjs.hash(password, 10);

        return passwordHash;

    } catch (error) {
        res.send(400).send(error.message)
    }
}


export const save = async (req, res) => {
    try {


        var check = await userSchemaModel.findOne({ email: req.body.email })
        if (check)
            res.status(400).send("email allready exist")
        else {
            var user = await userSchemaModel.find().sort({ "_id": -1 })
            var _id = user.length == 0 ? 1 : user[0]._id + 1
            var iconname = req.file.filename
            var spassword = await securePassword(req.body.password)
            console.log(spassword)
            var userDetails = { ...req.body, "_id": _id, "iconname": iconname, "token": "", "role": "user", "status": true }
            userDetails.password = spassword;
            let key = rs.generate({
                length: 6,
                charset: 'numeric' 
            });
            
            // res.send("working")
            sendEmail(userDetails.email,userDetails.password,key);

            await userSchemaModel.create(userDetails)
            res.status(200).json({ status: "Record saved succesfully", otp:key, userdetails:userDetails })

        }



    } catch (error) {
        res.status(400).json({ status: error.message })
    }

}

export const fetch = async (req, res) => {

    var condition_obj = url.parse(req.url, true).query
    var userlist = await userSchemaModel.findOne(condition_obj)

    if (userlist)
        res.status(201).json(userlist)

    else
        res.status(500).json('record not found');

}

export var deleteUser = async (req, res) => {
    var condition_obj = (req.body);

    var userlist = await userSchemaModel.find(condition_obj);

    if (userlist.length != 0) {
        var del = await userSchemaModel.deleteOne(condition_obj);
        if (del)
            return res.status(201).json("record deleted sucessfully");
        else
            return res.status(500).json("server");

    }
    else
        res.status(404).json('Record not found');

}

export var updateUser = async (req, res, next) => {

    // console.log(JSON.parse(req.body.condition_obj))
    var user = await userSchemaModel.findOne(JSON.parse(req.body.condition_obj));

    if (user) {

        var result = await userSchemaModel.updateOne(JSON.parse(req.body.condition_obj), { $set: (JSON.parse(req.body.content_obj)) });
        if (result)
            res.status(201).json("record updated sucessfully");
        else
            res.status(500).json("server");

    }
    else
        return res.status(404).json('Record not found');

}

export var login = async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        var user = await userSchemaModel.findOne({ email: email })

        if (user) {
            var passwordMatch = await bcryptjs.compare(password, user.password)

            console.log(passwordMatch)
            if (passwordMatch) {
                const token = await createToken(user._id)
                user.token = token;

                res.status(200).json({ status: true, userDetails: user })
            }
            else {
                res.status(200).json({ status: false, msg: "Invalid Password" })
            }
        }

        else
            res.status(200).json({ status: false, msg: "Invalid credentials" })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export var upload = async (req, res) => {

    console.log(req.files)

    res.send("all working")
}

export const resetPassword = async (req, res) => {
    try {
        const content_obj = { token: req.query.token, password: req.query.password }
        const user = await userSchemaModel.findOne({ token: req.query.token })

        if (user) {
            const password = req.query.password;
            let newPassword = await securePassword(password)

            await userSchemaModel.updateOne({ _id: user._id }, { $set: { password: newPassword, token: "" } })

            res.status(200).send({ sucess: true, message: "password updated sucessfully" })
        }
        else {
            res.status(500).send({ sucess: true, message: "this link has been expired" })
        }

    }
    catch (error) {
        res.status(400).send({ sucess: false, message: "user not found" })

    }

}




export const frogotPassword = async (req, res) => {
    try {
        const email = req.body.email
        var user = await userSchemaModel.find({ email: email })
        if (user.length != 0) {
            const key = rs.generate();
            await userSchemaModel.updateOne({ email: email }, { $set: { "token": key } })
            sendEmail1(email, key, req.body.name)
            res.status(200).send({ sucess: true, message: "please check your inbox of email and copy the link to reset your password" })
        }
        else {
            res.status(500).send({ sucess: true, message: "password not reset" })

        }
    } catch (error) {
        res.status(400).send({ sucess: false, message: error.message })

    }

}













// export const frogotPassword=async(req,res)=>{
//     var result=await securePassword("123654")
//     console.log(result)
//     res.send("working")
// }

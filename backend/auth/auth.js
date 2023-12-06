import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import rs from "randomstring"
import config from "../config/config.js"
import sendEmail1 from "./email.forgotpassword.js"
import userSchemaModel from "../registration/models/userSchemaModel.js"


// ......................................create token.........................
const createToken=async(id)=>{
    try {
        const token=jwt.sign({_id:id},config.secrete_Key)
        
        return token;
    } catch (error) {
        res.status(400).json(error.message)
    }
}

// ......................................secure password.........................

const securePassword = async (password) => {
    try {
        const passwordHash = await bcryptjs.hash(password, 10);

        return passwordHash;

    } catch (error) {
        res.send(400).send(error.message)
    }
}


// ........................................login...........................................

export var login = async (req, res) => {
    try {
        const email = req.body.email
        const password=req.body.password

    var user = await userSchemaModel.findOne({"email":email,"status":true})
    
    if (user)
        {var passwordMatch=await bcryptjs.compare(password,user.password)
            // delete user.password
            
            
        if(passwordMatch)
        {
            const token=await createToken(user._id)
            
            user.token=token;
            
            res.status(200).json({status:true,userDetails:user})
        }
        else{
            res.status(200).json({status:false,msg:"Invalid Password"})
        }
    }
        
    else
        res.status(200).json({status:false,msg:"Invalid credentials or please verify your account"})
    } catch (error) {
        res.status(400).json(error.message)
    }
}


// ...................................reset password..............................................

export const resetPassword = async (req, res) => {
    try {
        const content_obj = { token: req.query.token, password: req.query.password }
        const user = await userSchemaModel.findOne({ token: req.query.token })

        if (user) {
            const password = req.query.password;
            let newPassword = await securePassword(password)

            await userSchemaModel.updateOne({ _id: user._id }, { $set: { password: newPassword,token:"" } })

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

//..............................................forgot password.....................................

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
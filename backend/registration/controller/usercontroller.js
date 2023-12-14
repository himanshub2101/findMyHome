import "../models/connection.js";
import bcryptjs from "bcryptjs"
import { validationResult } from "express-validator";
import userSchemaModel from "../models/userSchemaModel.js";
import sendEmail from "./email.controller.js";
import rs from "randomstring";



const securePassword = async (password) => {
    try {
        const passwordHash = await bcryptjs.hash(password, 10);

        return passwordHash;

    } catch (error) {
        res.send(400).send(error.message)
    }
}
// ..........................................save .................................................
export const save = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
        } else {
            let check = await userSchemaModel.findOne({ email: req.body.email });
            if (check)
                res.status(200).json({ sucess: false, msg: "This email is allready registered" });
            else {
                var email=req.body.email;
                var password=req.body.password
                delete req.body.cnfpassword;
                req.body.password = await securePassword(req.body.password);
                // console.log(req.body.password)
                // console.log(req.body)
                const userDetails = { ...req.body,"status":0,"token":"","info":Date.now() };
                var result = await userSchemaModel.create(userDetails);
                let key = rs.generate({
                    length:6
                })
                sendEmail(email,password,key)
                console.log(key)
                if (result)
                    res.status(200).send({ sucess: true, msg: "user registered succesfully","otp":key });
                else 
                res.status(500).send({ sucess: false, msg: "server error" });
            }
        }
    } catch (error) {
        res.status(400).send({ sucess: false, msg: error.message });
    }
};




// ....................................fetch .................................................

export const fetch = async (req, res) => {
    try {
        var userlist = await userSchemaModel.find(req.query)

        if (userlist) {
            res.status(201).json({ sucess: true, data: userlist })
        }

        else
            res.status(500).json('record not found');
    } catch (error) {
        res.status(400).json({ sucess: false, msg: error.message })
    }

}

// ........................................delete ..............................................

export const deleteUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        var user = await userSchemaModel.findOne({ "email": email });

        if (user) {
            var passwordMatch = await bcryptjs.compare(password, user.password);

            console.log(passwordMatch);

            if (passwordMatch) {
                var del = await userSchemaModel.deleteOne({ "email": email });

                if (del.deletedCount > 0) {
                    res.status(200).json({ success: true, msg: "Record Deleted Successfully" });
                } else {
                    res.status(200).json({ success: false, msg: "Record not found or already deleted" });
                }
            } else {
                res.status(200).json({ success: false, msg: "Incorrect password" });
            }
        } else {
            res.status(200).json({ success: false, msg: "Record Not Found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
};

// ........................................update ....................................................

export var updateUser = async (req, res) => {

    try {
        // console.log(JSON.parse(req.body.condition_obj))
        var user = await userSchemaModel.findOne(JSON.parse(req.body.condition_obj));

        if (user) {
            await userSchemaModel.updateOne(JSON.parse(req.body.condition_obj), { $set: (JSON.parse(req.body.content_obj)) });

            res.status(200).json({ sucess: true, msg: "Record updated sucessfully" })
        }
        else
            res.status(200).json({ sucess: false, msg: "Record not found" })
    } catch (error) {
        res.status(400).json({ sucess: false, msg: error.message })

    }
}





import nodemailer from "nodemailer"
import config from "../config/config.js"

const sendEmail=async(email,password,otp)=>{
    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:config.email,
            pass:config.password
        }
    });
    
    var mailOptions={
        from:config.email,
        to:email,
        subject:"user forgot-password email",
        html:` <h1>Welcome to FindMyHome<h1/><p>You have requested for password change on our application, Your otp for changing password is ${otp} </br>Please do not share this otp with any one</p><h3>User Id : ${email}</h3><h2>Click on the link below to verify your account<h2/><a href="http://localhost:3000/verifyuser/${email}> click here to verify your account</a>`
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error)
console.log(error.message)   
 else
 console.log("registration email sent",info.response)

    })
}

export default sendEmail;
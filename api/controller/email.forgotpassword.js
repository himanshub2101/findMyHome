import nodemailer from "nodemailer"

export default async function sendEmail(email, token, name) {
    var transporter = nodemailer.createTransport({
        service:"gmail",
        port:465,
        secure:true,
        logger:true,
        debug:true,
        secureConnection:false,
        auth:{
            user:"akhil.hammoq@gmail.com",
            pass:"yoyphoneysingh"
        },
        tls:{
            rejectUnAuthorized:true
        }
    })

    var mailOptions = {
        from: "akhil.hammoq@gmail.com",
        to: email,
        subject: "for reset password ",
        text: "hello this is a fake mail"

    }

    transporter.sendMail(mailOptions, function (err, info) {
        console.log(email, token, name)
        if (err)
            console.log(err.message)
        else
            console.log("email sent")
    });
}

// html:` <h1>Hi.. "+${name}+"</h1> <p>Please click on the below link to reset your password</p><br/><a href="http://localhost:3001/user/resetpassword?token="+${token}>Click to reset password</a>`
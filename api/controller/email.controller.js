import nodemailer from "nodemailer"

export default function sendEmail(email, password,otp) {
    var transporter = nodemailer.createTransport({
        serivce: "gmail",
        auth: {
            user: "akhil.hammoq@gmail.com",
            pass: "yoyohoneysingh"
        }
    })

    var mailOptions = {
        from: "akhil.hammoq@gmail.com",
        to: email,
        subject: "Verification email",
        html: `
        <h1>Welcome to findMyHome</h1>
        <p>You have successfully registered on our application. Your login credentials are attached below.</p>
        <h2>Login Details</h2>
        <h3>User Id: ${email}</h3>
        <h3>Password: ${password}</h3>
        <h3>OTP: ${otp}</h3>
        <h2>Click on the link below to verify your account</h2>
        <a href="http://localhost:3000/verifyuser/${email}">Verification Link</a>
    `
    };


    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err.message)
        else
            console.log("email sent:" + info.response)
    });
}

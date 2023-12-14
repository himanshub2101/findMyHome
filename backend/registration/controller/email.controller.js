// import nodemailer from "nodemailer"
// import config from "../../config/config.js"

// const sendEmail=async(email,password,otp)=>{
//     const transporter=nodemailer.createTransport({
//         service:"gmail",
//         auth:{
//             user:config.email,
//             pass:config.password
//         }
//     });
    
//     var mailOptions={
//         from:config.email,
//         to:email,
//         subject:"user registration confirmation email",
//         html: `
//         <h1>Welcome to findMyHome</h1>
//         <p>You have successfully registered on our application. Your login credentials are attached below.</p>
//         <h2>Login Details</h2>
//         <h3>User Id: ${email}</h3>
//         <h3>Password: ${password}</h3>
//         <h3>OTP: ${otp}</h3>
//         <h2>Click on the link below to verify your account</h2>
//         <a href="http://localhost:4200/verifyuser/${email}">Verification Link</a>
//     `
//     }

//     transporter.sendMail(mailOptions,(error,info)=>{
//         if(error)
// console.log(error.message)   
//  else
//  console.log("registration email sent",info.response)

//     })
// }

// export default sendEmail;




import nodemailer from "nodemailer"

export default function sendEmail(email, password,otp) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "meghnagupta0801@gmail.com",
            pass: "ckci twdh bzee dbdj"
        }
    });
    

    var mailOptions = {
        from: "meghnagupta0801@gmail.com",
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
        <a href="http://localhost:4200/verifyuser/${email}">Verification Link</a>
    `
    };


    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err.message)
        else
            console.log("email sent:" + info.response)
    });
}


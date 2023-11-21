import nodemailer from "nodemailer"

export default function sendEmail(email,password)
{
    var transporter=nodemailer.createTransport({
        serivce:"gmail",
        auth:{
            user:"akhil.hammoq@gmail.com",
            pass:"yoyohoneysingh"
        }
    })

    var mailOptions={
        from:"akhil.hammoq@gmail.com",
        to:email,
        subject:"verification email",
        html:" <h1>Welcome to LRIT<h1/><p>You have succesfully registered on our application, Your login credentials are attached below<p/><h2>Login Detials<h2/><h3>User Id : "+email+"<h3/><h3>Password : "+password+"<h3/><h2>Click on the link below to verify your account<h2/>http://localhost:3000/verifyuser/"+email
    }

    transporter.sendMail(mailOptions,function(err,info){
        if(err)
        console.log(err.message)
        else
        console.log("email sent:"+info.response)
    });
}
import {check} from "express-validator"

export const signupValidation=[
    check("name","name is required").not().isEmpty(),
    check("role","role is required").not().isEmpty(),
    check("email","Please Enter a valid email").isEmail().normalizeEmail({gmail_remove_dots:true}),
    check("mobile","Mobile Number should contain 10 digits").isLength({
        min:10,
        max:10
    }),
    check("password","Password min length must be 6 and contain 1 uupercase, 1 lowercase,1 number and 1 special character ").isStrongPassword({
        minLength:6,
        minLowercase:1,
        minUppercase:1,
        minNumbers:1,
        minSymbols:1
    }).custom((value,{req})=>{
        if(value !==req.body.cnfpassword)
        return false;
        else
        return true;
    }).withMessage("password Mismatch"),
    
    // check("image").custom((value,{req})=>{
    //     if(req.file.mimeType==="image/jpeg" || req.file.mimeType==="image/png")
    //     return true;
    //     else
    //     return false;
    // }).withMessage("please upload jpeg/PNG fromate image")
];

export const loginValidation=[
    check("email","please enter a valid email").isEmail(),
    check("password","Please enter a valid Password").isStrongPassword({
        minLength:6,
        minLowercase:1,
        minUppercase:1,
        minNumbers:1,
        minSymbols:1
    })
]

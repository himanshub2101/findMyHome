import express from "express";
import multer from "multer"
import rs from "randomstring"
import auth from "../middleware/auth.js"

import * as userController from "../controller/userController.js"
const router=express.Router();

var uploads=multer({
    storage:multer.diskStorage({
        
        destination:(req,file,cb)=>{
            
            cb(null,"public/userProfilePic")  
        },
        filename:(req,file,cb)=>{
           
            const name=Date.now()+"-"+rs.generate()+"-"+file.originalname;
            
            cb(null,name)
        }
    })
}).single("user_file");


router.get("/test",auth,(req,res)=>{
    
    
    res.status(200).send("userAuthenticated")
})

router.post("/save",uploads,userController.save)
router.get("/fetch",userController.fetch)
router.delete("/delete",userController.deleteUser)
router.patch('/update',userController.updateUser);
router.post('/login',userController.login);
router.post('/upload',uploads,userController.upload);
router.post('/forgotpassword',userController.frogotPassword); 
router.get('/resetpassword',userController.resetPassword); 

export default router;


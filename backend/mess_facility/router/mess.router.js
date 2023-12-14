import express from "express"
import multer from "multer"
import rs from "randomstring"
import * as messController from "../controller/mess.controller.js"
import tokenAuth from "../../middleware/tokenAuth.js"
const router=express.Router()

var uploads=multer({
    storage:multer.diskStorage({
        
        destination:(req,file,cb)=>{
            
            cb(null,"public/mess_pics")  
        },
        filename:(req,file,cb)=>{
           
            const name=Date.now()+"-"+rs.generate()+"-"+file.originalname;
            
            cb(null,name)
        }
    })
}).array("iconname",5);







router.post("/add",uploads,tokenAuth,messController.add)
router.get("/fetch",tokenAuth,messController.fetch)
router.delete("/delete",tokenAuth,messController.deleteMess)
router.post("/update",uploads,messController.updateMess)
router.delete("/delpic",uploads,messController.delpic)
// router.patch("/update",messController.updateMess)
// router.post("/login",auth.login)
// router.post("/forgotpassword",auth.forgetpassword)
// router.post("/resetpassword",auth.resetpassword)





export default router;
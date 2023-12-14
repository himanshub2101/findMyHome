import express from "express";
import * as userController from "../controller/usercontroller.js"
import * as auth from "../../auth/auth.js"
import { signupValidation,loginValidation } from "../../middleware/validator.js";




const router=express.Router()

router.post("/register",signupValidation,userController.save)
router.get("/fetch",userController.fetch)
router.delete("/delete",userController.deleteUser)
router.patch('/update',userController.updateUser);
router.post('/login',loginValidation,auth.login);






export default router;
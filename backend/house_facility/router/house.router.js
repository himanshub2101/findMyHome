import express from "express"
import multer from "multer"
import rs from "randomstring"
import * as houseController from "../controller/house.controller.js"
import tokenAuth from "../../middleware/tokenAuth.js"
const router = express.Router()

var uploads = multer({
    storage: multer.diskStorage({

        destination: (req, file, cb) => {

            cb(null, "public/house_pics")
        },
        filename: (req, file, cb) => {

            const name = Date.now() + "-" + rs.generate() + "-" + file.originalname;

            cb(null, name)
        }
    })
}).array("iconname", 5);







router.post("/add", uploads, tokenAuth, houseController.add)
router.get("/fetch", tokenAuth, houseController.fetch)
router.delete("/delete", tokenAuth, houseController.deleteMess)
router.post("/update", uploads, houseController.updateMess)
router.delete("/delpic", uploads, houseController.delpic)
// router.patch("/update",houseController.updateMess)
// router.post("/login",auth.login)
// router.post("/forgotpassword",auth.forgetpassword)
// router.post("/resetpassword",auth.resetpassword)





export default router;
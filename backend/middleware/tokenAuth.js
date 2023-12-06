import jwt from "jsonwebtoken"
import config from "../config/config.js"

const verifyToken = async (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers["authorization"]
    if (!token) {
        res.status(200).send("Token is required")
    }
    
    else{
        try {
        
            const code=jwt.verify(token,config.secrete_Key)
                req.user=code;
                next();
            }
            
            
        
        catch (error) {
           console.log("inside catch")
            res.status(400).send(error.message)
        }
    }
    
    

}
export default verifyToken;

import messSchemaModel from "../models/mess.schema.js"
import userSchemaModel from "../../registration/models/userSchemaModel.js"
import bcryptjs from "bcryptjs"
import fs from "fs"






export const add = async (req, res) => {
    
    const files=req.files;
    const iconname=[];
    try {
        var check = await userSchemaModel.findOne({email:req.body.email})
        if(check){
                       //..............................for iconname arary....................       
            for(let x of files){
                iconname.push(x.filename)
            }
                       //..........................................................................
        
            
            var details = {...req.body,"status":1,"iconname":iconname};
            var result=await messSchemaModel.create(details)
            res.status(200).json({status:"true",msg:"Mess registred successfuly"});

        }else{
            res.status(200).json({status:"false",msg:"Please enter your registered email address"});
        }
    } catch (error) {
        res.status(200).json({status:"false",msg:error});
    }

}
//....................................................fetch................................................

export const fetch = async (req, res) => {
    delete req.query.token;
    console.log(req.query)
// res.send("working")
    try {
        let result=await messSchemaModel.find(req.query)
        if(result.length!=0){

        res.status(200).json({"status":true,"details":result});

        }
        else{
            res.status(200).json({"status":false,"msg":"Invalid pincode"});

        }
    } catch (error) {
        
        res.status(500).json({"status":false,"msg":error.message});
    }
    
}
//.................................................delete...........................................
export var deleteMess = async (req, res) => {
    try {
        var user= await userSchemaModel.findOne({"email":req.body.email})
        if(user){
            var matchPwd = await bcryptjs.compare(req.body.password,user.password);
            console.log(matchPwd)
            if(matchPwd){
                console.log(matchPwd)
                var del = await messSchemaModel.deleteOne({"_id":req.body._id})
                if(del){
                    res.status(200).json({"status":true,"msg":"deleted"});
                }
                else{
                    res.status(200).json({"status":false,"msg":"server error"});
                }
            }else{
                res.status(500).json({"status":true,"msg":"Password mismatch"});
            }
        }else{
            res.status(500).json({"status":false,"msg":"user not found"});
        }

    } catch (error) {
        res.status(500).json({"status":false,"msg":error.message});

    }

}
//.................................................update...........................................
export var updateMess = async (req, res, next) => {

    try {
        // console.log(JSON.parse(req.body.condition_obj))
        var user = await messSchemaModel.findOne(JSON.parse(req.body.condition_obj));

        if (user) {
            await messSchemaModel.updateOne(JSON.parse(req.body.condition_obj), { $set: (JSON.parse(req.body.content_obj)) });

            res.status(200).json({ sucess: true, msg: "Record updated sucessfully" })
        }
        else
            res.status(200).json({ sucess: false, msg: "Record not found" })
    } catch (error) {
        res.status(400).json({ sucess: false, msg: error.message })

    }
}


export var upload = async (req, res) => {

    console.log(req.files)

    res.send("all working")
}
export var delpic = async (req, res) => {

 fs.stat('public/mess_pics/'+req.body.iconname, function (err, stats) {
    console.log(stats);//here we got all information of file in stats variable
 
    if (err) {
        return console.error(err);
    }
 
    fs.unlink('public/mess_pics/'+req.body.iconname,function(err){
         if(err) return console.log(err);
         
         res.send('file deleted successfully')
    });  
 });
 
    
     
}


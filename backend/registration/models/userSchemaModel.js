import mongoose from 'mongoose';


var userSchema=mongoose.Schema({
    
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minlength:6,
        trim:true
        
    },
    mobile:{
        type:String,
        required:[true,"number is required"],
        minlength:10,
        maxlength:10,
        trim:true,
        
    },  
    token:String,
    role:String,
    status:Boolean,
    info:String
   
});


var userSchemaModel=mongoose.model('user_details',userSchema);
export default userSchemaModel;
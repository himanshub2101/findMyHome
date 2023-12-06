import mongoose from 'mongoose';


var userSchema=mongoose.Schema({
    _id:Number,
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
        minlength:5,
        trim:true
        
    },
    mobile:{
        type:String,
        required:[true,"number is required"],
        minlength:10,
        maxlength:10,
        trim:true,
        
    },
    iconname:String,
    token:String,
    role:String,
    status:Boolean,

   
});


var userSchemaModel=mongoose.model('user_details',userSchema);
export default userSchemaModel;
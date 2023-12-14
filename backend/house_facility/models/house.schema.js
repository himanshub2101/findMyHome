import mongoose from "mongoose";

var houseSchema = mongoose.Schema({
    email: String,
    housename: {
        type: String,
        required: [true, "house name is required"],
        trim: true,
    },
    address: {
        type: String,
        required: [true, "address is required"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "description is required"],
    },
    pincode: {
        type: String,
        required: [true, "pincode is required"],
        minlength: 6,
        maxlength: 6,
        trim: true,
    },
    mobile: {
        type: String,
        required: [true, "mobile is required"],
        minlength: 10,
        maxlength: 10,
        trim: true,
    },
    housetype: {
        type: String,
        trim: true,
    },
    iconname: Array,
    price: String,
    status: Boolean,
    service: Boolean,
});

var houseSchemaModel = mongoose.model("house_details", houseSchema);
export default houseSchemaModel;

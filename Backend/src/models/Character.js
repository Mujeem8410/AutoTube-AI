import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },

    species:String,

    age:String,

    color:String,

    eyes:String,

    clothes:String,

    shoes:String,

    accessories:[String],

    personality:[String],

    imageStyle:String

});

export default mongoose.model("Character",characterSchema);
const mongoose = require("mongoose");

const shoesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    size: [{
      type: Number,
      required: true,
    }],
    brand:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    inStock:{
        type:Boolean,
        default:true
    },
    imageShoes:[
        {
        type:String,
        required:true
        }
    ]
  },
  { timestamps: true }
);
module.exports  = mongoose.model("Shoe", shoesSchema);

 
const mongoose = require("mongoose");

const urlSchmena= new mongoose.Schema(
    {
    shortId : {
        type : String,
        required : true,
        unique:true
    },
    redirectUrl:{
        type : String,
        required : true,
    },
    visitHistory : [{timeStamp:{type:Number}}],
    },
    {timestamps : true}
)

const URL = mongoose.model("url",urlSchmena);

module.exports = URL;
const express = require("express");
const staticRouter = express.Router();
const URL = require("../model/url");

const {handleHomeView} = require("../controller/url")
staticRouter.get("/",handleHomeView);
// staticRouter.get("/",async(req,res)=>{
//     const allURLs = URL.find({});
//     console.log(allURLs);
//     return res.render("home.ejs",{urls : allURLs});
// });
module.exports=staticRouter;
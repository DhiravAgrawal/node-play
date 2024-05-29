const short_id = require("shortid");
const URL = require("../model/url")
async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error : "url is required"})
    
    const shortID = short_id();
    await URL.create({
        shortId : shortID,
        redirectUrl : body.url,
        visitHistory : []
    }) 
    res.json({sucess : shortID});
    // console.log("wow");
}
module.exports={
    handleGenerateNewShortUrl,
}
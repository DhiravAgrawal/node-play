const short_id = require("shortid");
const URL = require("../model/url");

async function handleGenerateNewShortUrl(req,res){
    console.log("done");
    const body = req.body;
    if(!body.url) return res.status(400).json({error : "url is required"})
    
    const shortID = short_id();
    await URL.create({
        shortId : shortID,
        redirectUrl : body.url,
        visitHistory : []
    }) 
    res.render("home.ejs",{id : shortID});
}

async function handleRedirectUrl(req,res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    },
    {
        $push : {
            visitHistory : {timestamp : Date.now()},
        }
    }
    );
    console.log("hoohohohoh");   
    res.redirect(entry.redirectUrl);
}
async function handleShowAnalytics(req,res){
    const shortId= req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalclicks : result.visitHistory.length,
        analytics : result.visitHistory,
    });
    // res.json({
    //     id : shortId,
    //     Sucess:{result}})
}

async function handleHomeView(res,req){
    const allURLs = URL.find({});
    res.render("home.ejs",{urls : allURLs});
}
module.exports={
    handleGenerateNewShortUrl,
    handleRedirectUrl,
    handleShowAnalytics,
    handleHomeView
}
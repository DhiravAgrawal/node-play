const express = require("express");
const router = express.Router();
const {handleGenerateNewShortUrl,handleRedirectUrl, handleShowAnalytics} = require("../controller/url")
router.post("/",handleGenerateNewShortUrl);
router.get("/:shortId",handleRedirectUrl);
router.get("/analytics/:shortId",handleShowAnalytics);

module.exports=router;
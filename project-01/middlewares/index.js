const file = require("fs")
function logReqRes(filename){
    return (req,res,next)=>{
        file.appendFile(
            filename,
            `\n ${Date.now()} : ${req.method} : ${req.method} : ${req.path}`,
        (err,data)=>{
            next();
        });  
    }
}
module.exports={
    logReqRes,
}
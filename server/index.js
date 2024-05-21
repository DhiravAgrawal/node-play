const http = require("http");
const file = require("fs");
const url = require("url");
const myServer = http.createServer((req,res)=>{
    if(req.url==="./favicon.ico") return res.end();
    const log = `${Date.now()}: New req Recieved\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    file.appendFile("./logs.txt", log,(err,data)=>{
        switch(myUrl.pathname){
            case "/" : res.end("HomePage");
            break
            case "/about" : 
            const username = myUrl.query.Dhirav;
            res.end(`Hi, ${username}`);f
            break
            default :
            res.end("404 Not Found");
        }
    });
});

myServer.listen(8000,()=>{console.log("welcome")});
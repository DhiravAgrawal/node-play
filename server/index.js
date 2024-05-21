const http = require("http");
const file = require("fs");
file.writeFile("./logs.txt","\n",(err)=>{console.error(err)})
const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: New req Recieved\n`;
    file.appendFile("./logs.txt", log,(err,data)=>{
        switch(req.url){
            case "/" : res.end("HomePage");
            break
            case "/about" : res.end("Yo soy Dhirav Agrawal");
            break
            default :
            res.end("404 Not Found");
        }
    });
});

myServer.listen(8000,()=>{console.log("welcome")});
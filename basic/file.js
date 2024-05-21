const fs = require("fs");

// sync
fs.writeFileSync("./message.txt","Hello, Mi soy Dhirav");
console.log(fs.readFileSync("./message.txt", "utf-8"));

//async
fs.writeFile("./contacts.txt","Dhirav : 9328242712", (err)=>{});
fs.readFile("./contacts.txt","UTF-8", (err,result)=>{
    if(err){
        console.log("Error : ",err);
    }
    else{
        console.log(result);
    }
});


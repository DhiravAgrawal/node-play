const express = require("express");

const app = express();
app.get("/",(req,res)=>{
    res.send("Hola buenos dias,\n Adios Mucho Gusto...")
});

app.listen(8000,()=>{console.log("Server Started")});
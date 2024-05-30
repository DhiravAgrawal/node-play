const express = require("express");
const app = express();
const path = require("path");

// const ejs = require('ejs');
const PORT=8001;
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const {connectToMongoDB} = require("./connection");

app.set("view engine","ejs");
// console.log("done");
app.set("views",path.join(__dirname,"./views"));

connectToMongoDB("mongodb://localhost:27017/short-url")
    .then((result) => {
        console.log("DB connected")
    }).catch((err) => {
        console.log("DB not connected", err)
    });

app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use("/url",urlRoute);
app.use("/",staticRoute);


app.listen(PORT,console.log("Server Started"));
const express = require("express");
const app = express();
const PORT=8001;
const urlRoute = require("./routes/url")
const {connectToMongoDB} = require("./connection");

connectToMongoDB("mongodb://localhost:27017/short-url")
    .then((result) => {
        console.log("DB connected")
    }).catch((err) => {
        console.log("DB not connected", err)
    });

app.use(express.json());
app.use("/url",urlRoute);
app.listen(PORT,console.log("Server Started"));
const express =  require("express");
const app = express();

const userRouter = require("./routes/user");
const {connectMongoDB} = require("./connection");
const {logReqRes} =require("./middlewares");

connectMongoDB("mongodb://127.0.0.1:27017/youtube-app-1").then(console.log("MongoDB Done..."));

app.use(express.urlencoded({extended: false}));
app.use(logReqRes("./log.txt"));

app.use("/users",userRouter);

app.listen(8000,() => {console.log("Server started")}); 
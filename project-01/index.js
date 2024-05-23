const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const file = require("fs");
//Middleware
app.use(express.urlencoded({extended: false}));
app.use((req,res,next)=>{
    file.appendFile("./log.txt",`\n ${Date.now()} : ${req.method} : ${req.path}`,
    (err,data)=>{
        next();
    });    
});
//ROUTES
app.get("/users",(req,res)=>{
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    <ul>
    `;
    res.send(html);
});
//REST-API----


app.get("/api/users",(req,res)=>{
    return res.json(users);
});
//DYNAMIC PATH PARA /api/users/:id(variable)

app.route("/api/users/:id")
.get((req,res) => {
    const id =Number(req.params.id);
    const user = users.find((user)=>user.id===id);
    return res.json(user);
})
.patch((req,res)=>{
    //edit user with id 
    return res.json({status : "Pending"});
})
.delete((req,res)=>{
    //edit user with id 
    return res.json({status : "Pending"});
});  

app.post("/api/users",(req,res)=>{
    const body = req.body;
    users.push({...body,id: users.length + 1});
    file.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data)=>{
        return res.json({status : "sucess ",id: users.length})
    });
});

const PORT = 8000;
app.listen(PORT,() => {console.log("Server started")}); 
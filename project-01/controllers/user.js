const user = require("../models/user");

async function handelGetAllUser(req,res){
    console.log("hello");
    const allUsers = await user.find({});
    return res.json(allUsers);
}
async function handlegetUserById(req,res){
    console.log("hello");
    const User = await user.findById(req.params.id);
    if(!User) return res.status(404).json({error : "user not found" });
    return res.json(User);
}
async function handlefindByIdAndUpdate(req,res){
    await user.findByIdAndUpdate(req.params.id,{last_name : "Changed"});
    return res.json({status : "Sucess"});
}
async function handlefindByIdAndDelete(req,res){
    await user.findByIdAndDelete(req.params.id);
    return res.json({status : "Sucess"});
}
async function handlecreateUser(req,res){
    console.log("hello");
    const body = req.body;
    if(
        !body.first_name||
        !body.last_name||
        !body.email||
        !body.gender||
        !body.job_title
    ){
        return res.status(400).json({msg: "all fields are requested..."});
    }
    await user.create({
        first_name : body.first_name,
        last_name :  body.last_name,
        email : body.email,
        gender : body.gender,
        job_title : body.job_title
    });
    return res.json(user);

}
module.exports={
    handelGetAllUser,
    handlegetUserById,
    handlefindByIdAndUpdate,
    handlefindByIdAndDelete,
    handlecreateUser
}
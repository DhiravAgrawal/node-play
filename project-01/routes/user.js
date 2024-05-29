const express = require("express");
const { handelGetAllUser, handlegetUserById, handlefindByIdAndUpdate, handlefindByIdAndDelete, handlecreateUser } = require("../controllers/user");
// const user = require("../models/user");
const router = express.Router(); 

router.
    route("/")
    .get(handelGetAllUser)
    .post(handlecreateUser);

router.
    route("/:id")
    .get(handlegetUserById)
    .patch(handlefindByIdAndUpdate)
    .delete(handlefindByIdAndDelete);  

module.exports = router;
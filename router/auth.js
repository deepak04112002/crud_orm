const router = require("express").Router();
const authentication = require("../auth/authentication.js");
const dotenv = require("dotenv");
const create=require("../controllers/createuser.js")
const getalluser=require("../controllers/getalluser.js")
const updateuser=require("../controllers/updateuser.js")
const deleteuser=require("../controllers/deleteuser.js")
dotenv.config();

router.post("/create",create);

router.get("/alluser", authentication, getalluser);

router.put("/update", authentication, updateuser);

router.delete("/delete", authentication, deleteuser);

module.exports = router;

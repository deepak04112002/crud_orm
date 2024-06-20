const User=require("../Schema/model.js")

module.exports=async (req, res) => {
    const allUser = await User.findAll();
    console.log(allUser);
    res.send(allUser).status(200);
  }
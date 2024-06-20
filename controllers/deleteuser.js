const User=require("../Schema/model.js")

module.exports=async (req, res) => {
    const { email } = req.body;
    const deleteUser = await User.destroy({ where: { email } });
    res.sendStatus(200);
  }
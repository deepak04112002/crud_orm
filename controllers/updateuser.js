const User=require("../Schema/model.js")

module.exports=async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const updatedData = await User.update(
      { firstName, lastName },
      { where: { email } }
    );
    res.send(updatedData).status(200);
  };
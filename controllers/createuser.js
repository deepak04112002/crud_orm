const bcrypt=require('bcrypt');
const User=require("../Schema/model.js")
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv")
dotenv.config();

module.exports=async(req,res)=>{
    try {
        const { firstName, lastName, email } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedEmail = await bcrypt.hash(email, salt);
        const data = await User.create({ firstName, lastName, email: hashedEmail });
    
        const token = jwt.sign(
          {
            email,
          },
          process.env.secret,
          { expiresIn: "1h" }
        );
    
        console.log(data);
        res.send({ data, token }).status(200);
      } catch (error) {
        res.send(error).status(400);
      }
}
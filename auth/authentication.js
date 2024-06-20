const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authentication = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res
        .status(400)
        .json("No authentication token, authorization denied.");
    }
    token = req.headers.authorization.split(" ")[1];

    const verified = jwt.verify(token, process.env.secret);
    if (!verified)
      return res
        .status(400)
        .json("Token verification failed, authorization denied.");

    req.email = verified.email;

    next();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = authentication;

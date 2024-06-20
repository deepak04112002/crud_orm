const express = require("express");
const sequelize = require("./DB/dbConnection.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");

const authRoute = require("./router/auth.js");

const app = express();
const port = process.env.port || 8011;
app.use(express.json());
app.use(bodyParser.urlencoded({ extends: false }));
app.use(cookieParser());
app.use(compression());
app.use(cors());

sequelize
  .authenticate()
  .then(() => {
    console.log("connection done");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/", authRoute);

app.listen(port, () => console.log(`app listening on port ${port}!`));

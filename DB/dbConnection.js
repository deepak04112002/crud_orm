const Sequelize=require("sequelize");
const dotenv=require('dotenv');
dotenv.config();
module.exports=new Sequelize({
    database:process.env.database,
    username:process.env.username,
    password: process.env.password,
    host:process.env.host,
    dialect:'mysql',
    dialectModule: require('mysql2'),
    benchmark: true
});



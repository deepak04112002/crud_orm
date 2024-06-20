const sequelize=require("../DB/dbConnection.js");
const dataTypes=require('sequelize/lib/data-types')

const User=sequelize.define('Customer',{
    firstName:{
        type:dataTypes.STRING
    },
    lastName:{
        type:dataTypes.STRING,
    },
    email:{
        type:dataTypes.STRING,
        unique:true
    }
});
module.exports=User;
require('dotenv').config();
//Import Sequelize to get access to MySQL server
const Sequelize = require('sequelize');

//Pass in information to make connection with MySQL server
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port : 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });
//export sequelize
module.exports = sequelize;

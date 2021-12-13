//import Model and DataTypes from sequelize
const { Model, DataTypes } = require('sequelize');
//Import our connection file to establish connection with mysql
const sequelize = require('../config/connection.js');

//Tag inherits methods from Model
class Tag extends Model {}
//Model strcuture for Tag
Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;

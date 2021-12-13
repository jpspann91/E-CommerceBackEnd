//import Model, DataTypes and sequelize
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

//Category inherits everything from Model class
class Category extends Model {}

//Model structure
Category.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

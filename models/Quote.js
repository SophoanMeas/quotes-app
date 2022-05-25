const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');

class Quote extends Model {}

Quote.init(
  {
     id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    quote_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categorie: {
  
    }
  },
  {
    //table configurations
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = Quote;
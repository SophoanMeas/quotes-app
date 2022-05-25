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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    quote_categorie: {
      type: DataTypes.STRING,
      references: {
        model: 'categorie',
        key: 'genre'
      }
    },
    created_by: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'username'
      }
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    //table configurations
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'quote'
  }
);

module.exports = Quote;
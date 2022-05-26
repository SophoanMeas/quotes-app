const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Category_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		quotes_id: {
			type: DataTypes.INETEGER,
			references: {
				model: 'quotes',
				key: 'id'
			}
		}
	},
	{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
);

module.exports = Category;
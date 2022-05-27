const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quotes extends Model {}

Quotes.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [ 1 ]
			}
		},
		author: {
			type: DataTypes.STRING,
			// allowNull: false,
			validate: {
				len: [ 1 ]
			}
		}
	// 	,
	// 	likes: {
	// 		type: DataTypes.INTEGER,
	// 		// allowNull: false,
	// 		defaultValue: 0
	// 	},
	// 	created_by: {
	// 		type: DataTypes.STRING,
	// 		allowNull: false
	// 		references: {
	// 			model: 'user',
	// 			key: 'username'
	// 		}
	// 	},
	// 	category_name: {
	// 		type: DataTypes.INTEGER,
	// 		references: {
	// 			model: 'category',
	// 			key: 'category_name'
	// 		}
	// 	}
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		timestamps: false,
		modelName: 'quotes'
	}
);

module.exports = Quotes;

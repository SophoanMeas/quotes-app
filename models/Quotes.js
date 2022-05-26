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
		likes: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		createAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		createdBy: {
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
		category_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'category',
				key: 'id'
			}
		}
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'quotes'
	}
);

module.exports = Quotes;

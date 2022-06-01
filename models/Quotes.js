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
				len: [ 2 ]
			}
		},

		author:{ 
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
					//  is: /^[a-z]+$/i, 
					len: [2]
			}
		},
		likes: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'posted_by',
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
		},
	},
	{
		sequelize,
		freezeTableName: true,
    timestamps: true,
		underscored: true,
		modelName: 'quotes'
	}
);

module.exports = Quotes;

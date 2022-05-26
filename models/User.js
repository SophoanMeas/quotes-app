const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    hashPassword(loginPassword){
        return bcrypt.compareSync(loginPassword, this.password)
    }
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            valide:{
                len: [6]
            }
        }
	},
	{
        hooks:{
            async beforeCreate(newUserData){
                newUserData.password = await bcrypt(newUserData.password, 10);
                return newUserData;
            }
        },
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'gallery'
	}
);

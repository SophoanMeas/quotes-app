const { Model, DataTypes } = require('sequelize');
const bcrypt = require('../config/connection')
class User extends Model{
    checkPassword(loginPwd){
        return bcrypt.compareSync(loginPwd, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        usernmae:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isAlpha: true,
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
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
            allowNull: false,
            validate: {
                len: [6]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData){
                newUserData.password = await bcrypt(newUserData.password, 10);
                return newUserData
            }
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

model.exports = User;
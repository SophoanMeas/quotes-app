const sequelize = require('../config/connection')
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('../config/connection');
class User extends Model{
    // checkPassword(loginPwd){
    //     return bcrypt.compareSync(loginPwd, this.password);
    // }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username:{
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
        },
        quotes_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'quotes',
                key: 'id'
            }
        },
        github_id:{
            type: DataTypes.INTEGER,
            references:{
                model: 'user',
                key: 'key'
            }
        }
    },
    {
    //     hooks: {
    //         async beforeCreate(newUserData){
    //             newUserData.password = await bcrypt(newUserData.password, 10);
    //             return newUserData
    //         }
    //     },
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;
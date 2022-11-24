const { DataTypes } = require("sequelize")
const db = require('../utils/database')
    /**
     *  {
     *       id:5,
     *      
     * }
     * 
     * 
     */

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    fisrt_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    birth_day: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    time_day: {
        type: DataTypes.DATE,

    }

})
module.exports = Users
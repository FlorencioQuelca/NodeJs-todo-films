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

const Tasks = db.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unic: true
    },
    description: {
        type: DataTypes.TEXT
    },
    is_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

})
module.exports = Tasks
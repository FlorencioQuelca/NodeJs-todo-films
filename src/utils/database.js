const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: "localhost",
    database: "dbtodo",
    username: "postgres",
    password: "123",
    port: 5432
})

db.authenticate()
    .then(() => console.log("database authenticada correctamente"))
    .catch(e => console.log(e))


module.exports = db
const { Sequelize } = requier('sequelize')


const db = new Sequelize({
    dialect: 'postgres',
    host: "localhost",
    database: "todo-db",
    username: "postgress",
    password: "root",
    port: 5432
})

db.authenticate()
    .then(() => console.log("database authenticada correctamente"))
    .catch(e => console.log(e))

db.sync()
    .then(() => console.log("database sincronizado correctamente"))
    .catch(e => console.log(e))

module.exports = db
const { Sequelize } = requier('sequelize')


const db = new Sequelize({
    dialect: 'postgres'
})
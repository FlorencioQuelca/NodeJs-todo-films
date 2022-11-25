//? Este archivo va a manejar todo lo relacionado a acciones de la base de datos de todo's
const Tasks = require("../models/task.model")

const todoDB = []
    //? TODO 
    //* {
    //*     id: 5,
    //*     title: 'Practicar express',
    //*     description: 'Ver videos de apoyo y crear otra API',
    //*     is_completed: false
    //* }

let id = 1

const findAllTodos = async() => {
    //? Esta funcion debe de traer todos los todo's de mi base de datos
    const data = await Tasks.findAll() //select * from Task
    return data
}

const findTodoById = async(id) => {
    //? Esta funcion debe de retornar un todo dependiendo el id
    // const todo = todoDB.find(item => item.id == id)

    const data = await Tasks.findOne({
        where: {
            id: id
        }

    })
    return data
}

const createTodo = async(obj) => {
    //? Esta funcion debe de crear un nuevo todo en mi base de datos y retornar el todo creado
    const newTodo = await Tasks.create({
        title: obj.title,
        description: obj.description,
    })
    return newTodo
}
const updateTodo = async(id, obj) => {
    const data = await Tasks.update(obj, {
        where: {
            id: id
        }
    })
    return data
}
const deleteTodo = async(id) => {
    const data = await Tasks.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllTodos,
    findTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}
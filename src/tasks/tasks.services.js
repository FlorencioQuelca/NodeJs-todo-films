//? En este archivo vamos a utilizar todo lo relacionado al REQ y RES

const taskControllers = require('./tasks.controllers')

//* taskControllers.createTodo()
//* taskControllers.findAllTodos()
//* taskControllers.findTodoById()

const getAllTodos = (req, res) => {
    const data = taskControllers.findAllTodos()
        .then(() => {
            res.status(400).json(data)
        })
        .catch(e => {
            res.status(400).json({ message: e.message })
        })
}

const getTodoById = (req, res) => {
    const id = req.params.id
    const data = taskControllers.findTodoById(id)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({ message: 'Invalid ID' })
    }
}

const postTodo = (req, res) => {
    const { title, description } = req.body

    if (title && description) {
        const data = taskControllers.createTodo({ title, description })
        res.status(201).json(data)
    } else {
        res.status(400).json({ message: 'Invalid Data', fields: { title: 'String', description: 'String' } })
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    postTodo
}
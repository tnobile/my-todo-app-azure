//const data = require('./data.js');
const data = require('./mongodata.js');

module.exports = {
    getTodos: async function (context) {
        try {
            const todos = await data.getToDos();
            context.res.status(200).json(todos);
        } catch (error) {
            context.res.status(500).send(error);
        }
    },
    addTodos: async function (context) {
        try {
            const response = await data.addToDo(context.req.body.task);
            context.res.status(200).json(response);
        } catch (error) {
            context.res.status(500).send(error);
        }
    },
    deleteTodos: async function (context) {
        try {
            const id = context.req.params.id;
            const response = await (id !== 'undefined' ? data.deleteToDos(context.req.params.id)
                : data.resetTodos());
            context.res.status(200).json(response);
        } catch (error) {
            context.res.status(500).send(error);
        }
    },
    editTodos: async function (context) {
        try {
            const response = await data.editTodos(context.req.body.task);
            context.res.status(200).json(response);
        } catch (error) {
            context.res.status(500).send(error);
        }
    }
}
const data = require('./data.js');

module.exports = {
    getTodos: function (context) {
        try {
            const todos = data.getToDos();
            context.res.status(200).json(todos);
        } catch (error) {
            context.res.status(500).send(error);
        }
    },
    addTodos: function (context) {
        try {
            const response = data.addToDo(context.req.body.task);
            context.res.status(200).json(response);
        } catch (error) {
            context.res.status(500).send(error);
        }
    },
    deleteTodos: function (context) {
        try {
            const id = context.req.params.id;
            const response = id !== 'undefined' ? data.deleteToDos(context.req.params.id)
                : data.resetTodos();
            context.res.status(200).json(response);
        } catch (error) {
            context.res.status(500).send(error);
        }
    },
    editTodos: function (context) {
        try {
            const response = data.editTodos(context.req.body.task);
            context.res.status(200).json(response);
        } catch (error) {
            context.res.status(500).send(error);
        }
    }
}
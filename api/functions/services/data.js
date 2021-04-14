const randomId = require('random-id')

const data = {
    todos: [
        {
            id: 1,
            task: 'learn spanish',
            status: 'completed'
        },
        {
            id: 2,
            task: 'take classes',
            status: 'not started'
        },
        {
            id: 3,
            task: 'write flashcards',
            status: 'in progress'
        },
        {
            id: 4,
            task: 'azure functions',
            status: 'completed'
        },
        {
            id: 5,
            task: 'lo que sea',
            status: 'completed!'
        },
    ]
};

module.exports = {
    getToDos: function () {
        return data.todos;
    },
    addToDo: function (task) {
        task.id = randomId(10);
        data.todos.push(task);
        return {
            message: "task added",
            tasks: data.todos.length
        }
    },
    deleteToDos: function (id) {
        data.todos = data.todos.filter(todo => todo.id != id)
        return {
            message: "task deleted",
            tasks: data.todos.length
        }
    },
    editTodos: function (task) {
        data.todos = data.todos.map(todo => {
            if (todo.id == task.id) todo = { ...todo, ...task };
            return todo;
        });
        return {
            message: "task edited",
            tasks: data.todos.length
        }
    }
}
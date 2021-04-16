const randomId = require('random-id')
const getCollection = require('./db');

//const { v4: uuidv4 } = require("uuid");

module.exports = {
    getToDos: async function () {
        return (await getCollection()).find({}).toArray();
    },
    addToDo: async function (task) {
        task.id = randomId(10);
        task.status = 'created';
        const id = (await getCollection()).insertOne(task);
        return {
            message: "task added",
            id: id
        }
    },
    deleteToDos: async function (id) {
        var result = (await getCollection()).deleteOne({ id: id })
        return {
            message: "task deleted",
            tasks: result.deletedCount
        }
    },
    editTodos: async function (task) {
        var result = (await getCollection()).updateOne({ id: task.id }, { $set: { ...task } });
        return {
            message: "task edited",
            tasks: result.modifiedCount
        }
    },
    resetTodos: async function () {
        var result = (await getCollection()).updateMany({ status: 'completed' }, { $set: { status: 'not completed' } });
        return {
            message: "tasks not reset",
            tasks: result.modifiedCount
        }
    }
};


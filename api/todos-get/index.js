const todoService = require('../functions/services/todo');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        status: 200,
        body: await todoService.getTodos(context)
    };
}
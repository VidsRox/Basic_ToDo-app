const mongoose = require("mongoose")

//url-
/* mongodb+srv://vidyun:vidyun180903@todo-backend-project.vc1kcmz.mongodb.net/todo-backend?retryWrites=true&w=majority&appName=todo-backend-project*/

const connectionString = 'mongodb+srv://vidyun:vidyun180903@todo-backend-project.vc1kcmz.mongodb.net/todo-backend?retryWrites=true&w=majority&appName=todo-backend-project'

mongoose.connect(connectionString)

const toDoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo-backend-project', toDoSchema);

module.exports = {
    todo
}
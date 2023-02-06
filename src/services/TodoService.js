const Todo = require("../models/Todo")

module.exports = class TodoService {

    static async get(id) {
        try {
            const response = await Todo.findById(id);
            return response;
        } catch (error) {
            console.log(`Could not fetch todos ${error}`);
        }
    }
    
    static async getAllTodos() {
        try {
            const response = await Todo.find();
            return response;
        } catch (error) {
            console.log(`Could not fetch todos ${error}`);
        }
    }

    static async add(data) {
        try {
            const newTodo = {
                title: data.title,
                description: data.description,
                date: data.date,
                finished: data.finished
            };

            const response = await new Todo(newTodo).save();
            return response;
        } catch (error) {
            console.log(`Could not save todo ${error}`);
        }
    }

    static async delete(id) {
        try {
            const response = await Todo.findOneAndDelete(id);
            return response;
        } catch (error) {
            console.log(`Could not delete todo ${error}`);
        }
    }
}
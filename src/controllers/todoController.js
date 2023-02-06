const TodoService = require("../services/TodoService");

exports.get = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(`Search by id ${id}`);
        const response = await TodoService.get(id);
        res.json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getAll = async (req, res) => {
    try {
        console.log("Get All");
        const todos = await TodoService.getAllTodos();
    
        if (!todos) {
            return res.sendStatus(404).json("Empty list");
        }
    
        res.send(todos);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.add = async (req, res) => {
    try {
        console.log("Add");
        const response = await TodoService.add(req.body);
        res.status(201).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.update = (req, res) => {
    const id = req.params.id;
    console.log("Update");
    res.send(`UPDATING id=${id}`);
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("Delete");
        const response = await TodoService.delete(id);
        res.status(202).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
}
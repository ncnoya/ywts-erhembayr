const Todo = require('../model/ToDoModel')

exports.getToDo = async (req,res)=>{
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.postToDo = async (req,res)=>{
    const todo = new Todo({
        text: req.body.text,
        completed: req.body.completed
    });

    try {
        const savedTodo = await todo.save();
        res.status(200).json(savedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.updateToDo = async (req,res)=>{
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,req.body
        );
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.deleteToDo = async(req,res)=>{
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
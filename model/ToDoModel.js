const mongoose = require('mongoose')

const ToDoModel = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('ToDo', ToDoModel)
const express = require("express")
const { getToDo, postToDo, updateToDo, deleteToDo } = require("../controller/ToDoController")
const router = express.Router()

router.get('/getToDo', getToDo)
router.post('/postToDo', postToDo)
router.put('/updateToDo/:id', updateToDo)
router.delete('/deleteToDo/:id', deleteToDo)

module.exports = router
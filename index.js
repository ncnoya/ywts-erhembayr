const express = require("express")
const connection = require('./db/connectDB');
const ToDoRouter = require('./routers/ToDoRouter')
const clientRouter = require('./routers/ClientRouter')
const port = 3005;
const app = express()
connection()
app.use(express.json())
app.use('/todo', ToDoRouter)
app.use('/client', clientRouter)
app.listen(port, ()=>{
    console.log(`server aslaa ${port} port`)
})
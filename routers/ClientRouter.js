const express = require('express')
const { getAllClient, createClient, UpdateClient, deleteClient, login } = require('../controller/clientController')
const { logger } = require('../middleware/logger')
const router = express.Router()

router.get('/getAllClient', getAllClient)
router.post('/createClient', logger, createClient)
router.put('/updateClient/:id', UpdateClient)
router.delete('/deleteClient/:id', deleteClient)
router.post('/login', login)

module.exports = router
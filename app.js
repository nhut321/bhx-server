const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const routes = require('./routes')
const connect = require('./config/db')

connect()
routes(app)

app.listen(PORT, () => console.log('Server connect at port '+PORT))
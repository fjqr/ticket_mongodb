const express = require('express')
const app = express()
const cors = require('cors')
const queriesRoutes = require('../server/routes/queries.routes')
const morgan = require('morgan')
const connectDataBase = require('./database')
const port = 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(queriesRoutes)

connectDataBase()
app.listen(port, () => {
    console.log(`Aplicación corriendo en el puerto ${port}`)
})
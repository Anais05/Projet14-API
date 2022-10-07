// establish an express app
const express = require('express')

const app = express()

// allow requests from outside resources like frontend
const cors = require('cors')
app.use(cors())

// app will serve and receive data in a JSON format
app.use(express.json())

// allow us to hide connection secret in the process.env object
const dotEnv = require('dotenv')
dotEnv.config()

// Connect to the database
const dbConnection = require('./database/connection')
dbConnection()

// Handle custom routes
const userRoutes = require('./routes/userRoutes')
app.use('/api/user', userRoutes)

// Have Node serve the files for our built React app
const path = require('path');
app.use(express.static(path.resolve(__dirname, '../client/build')));

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`Successfully listening on port: ${PORT}.`);
})

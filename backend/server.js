const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./dataBase/dataBase')
const productModel = require('./Models/productModel')
const cors = require('cors')
const path = require('path');

dotenv.config()

const app = express()

// Middlware
app.use(express.json())
app.use(cors())

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

//Api connection
const productRoute = require('./routes/productRoute')
app.use('/api',productRoute)


//Database connect
connectDB();

//Model Create
productModel();

// Server Connection
const port = process.env.PORT
app.listen(port, () => {
    console.log("Server running " + port)
})

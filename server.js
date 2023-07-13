const express = require('express');
const app = express();
const colors = require('colors')
require('dotenv').config();
const morgan = require('morgan');
const PORT = process.env.PORT;


//////////MIDDLEWARE///////
app.use(morgan('dev')) //Logging
app.use(express.urlencoded({extended:true}));



//Listening///
app.listen(PORT, ()=> {
    console.log(`Server running on Port: ${PORT}`.blue.bold.underline);
})
const express = require('express');
const app = express();
const users = require('./models/clients')
const colors = require('colors')
require('dotenv').config();
const morgan = require('morgan');
const PORT = process.env.PORT;


//////////MIDDLEWARE///////
app.use(morgan('dev')) //Logging
app.use(express.urlencoded({extended:true}));


//Routes////////////////
//Index Route
app.get('/notes',(req,res) => {
    res.render('index.ejs', {
        allUsers : users
    })
});

//Show Route
app.get('/notes/:id', (req,res) => {
    res.send(users[req.params.id])
})


//Create Route
app.post('/notes/', (req,res)=> {
    res.send('Create Route')
})


//Update Route
app.put('/notes', (req,res) => {
    res.status(204).end()
})

//Delete Route
app.delete('/notes/:id', (req,res) => {
    res.redirect('/notes')
})

//PORT Listening///
app.listen(PORT, ()=> {
    console.log(`Server running on Port: ${PORT}`.blue.bold.underline);
})
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const users = require('./models/clients')
const colors = require('colors')
require('dotenv').config();
const morgan = require('morgan');
const PORT = process.env.PORT;


//////////MIDDLEWARE///////
app.use(morgan('dev')) //Logging
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


//Routes////////////////
//Index Route
app.get('/notes',(req,res) => {
    res.render('index.ejs', {
        allUsers : users
    })
});

//New Route
app.get('/notes/new', (req,res) => {
    res.render('new.ejs')
})

//Show Route
app.get('/notes/:id', (req,res) => {
    res.render('show.ejs', {
        user: users[req.params.id]
    })
})


//Create Route
app.post('/notes', (req,res) => {
    users.push(req.body)
    res.redirect('/notes')
})

//Update Route
app.put('/notes', (req,res) => {
    users.push(req.body)
   res.redirect('/notes')
})

//PORT Listening///
app.listen(PORT, ()=> {
    console.log(`Server running on Port: ${PORT}`.blue.bold.underline);
})
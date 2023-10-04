const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT


app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
// servir contenido estatico

app.use( express.static('sitio'));

app.get('/',  (req, res) => {
  res.render('home', {
    nombre: 'Sebas',
    titulo: 'Curso node'
  })
})

/*
app.get('/hola-mundo',  (req, res) => {
    res.send('Hello mundo en otra ruta')
})*/

app.get('/generic',  (req, res) => {
    //res.send('Page not found')
    res.render('generic', {
        nombre: 'Sebas',
        titulo: 'Curso node'
      })

})

app.get('/elements',  (req, res) => {
    //res.send('Page not found')
    res.render('elements', {
        nombre: 'Sebas',
        titulo: 'Curso node'
      })

})

app.get('*',  (req, res) => {
    //res.send('Page not found')
    res.sendFile(__dirname + '/public/404.html');

})


app.listen(port)
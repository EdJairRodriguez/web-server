const express = require('express')
const app = express()
const path = require('path')
const { consoleLogMiddleware, fileLogMiddleware } = require('./middleware')

/* const middleware= require('./middleware')
const consoleLogMiddleware= middleware.consoleLogMiddleware
const fileLogMiddleware= middleware.fileLogMiddleware */

const hbs = require('hbs')
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
app.set('view engine', 'hbs') // clave valor

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear())
// con paso de parámetro:
hbs.registerHelper('toUpperCase', text => text.toUpperCase())

app.use(consoleLogMiddleware)
app.use(fileLogMiddleware)

const staticRoute = path.join(__dirname, 'public')
app.use('/static', express.static(staticRoute))

app.get('/', (req, res) => {
  res.send('Hola Msss')
})

app.get('/contactar', (req, res) => {
  res.render('contactar.hbs', {
    pageTitle: 'Contactar'
  })
})

app.get('/inicio', (req, res) => {
  res.render('inicio.hbs', {
    pageTitle: 'Contactar',
    currentYear: new Date().getFullYear()
  })
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

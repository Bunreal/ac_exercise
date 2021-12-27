// basic setting
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// use handlebars as engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// if url='/', then use main.handlebars with index.handlebars and routeName='index'
app.get('/', (req,res) => {
  res.render('index', { routeName: "index"})
})

// if url='/:routeName', then use main.handlebars with index.handlebars and routeName=req.params.routeName
app.get('/:routeName', (req,res) => {
  const routeName = req.params.routeName
  res.render('index', { routeName })
})

// set listening
app.listen(port, () => {
  console.log('the website is listening...')
})


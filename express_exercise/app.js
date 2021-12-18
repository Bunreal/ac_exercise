const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req,res) => {
  res.render('index', { routeName: "index"})
})

app.get('/:routeName', (req,res) => {
  const routeName = req.params.routeName
  res.render('index', { routeName })
})

app.listen(port, () => {
  console.log('is listening...')
})


const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const restaurantList = require('./restaurant.json')

// use handlebars, setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

app.get('/', (req,res) => {
  const restaurants = restaurantList.results
  res.render('index', {restaurants: restaurants})
})

app.get('/restaurants/:restaurant_id', (req,res) => {
  const id = req.params.restaurant_id
  const restaurant = restaurantList.results.find(el => el.id === Number(id))
  res.render('show', {restaurant: restaurant})
})

app.get('/search', (req,res) => {
  const restaurants = restaurantList.results.filter(el => el.name.toLowerCase().includes(req.query.keyword.trim().toLowerCase()) || el.category.toLowerCase().includes(req.query.keyword.trim().toLowerCase()))

  // 如果關鍵字找不到任何東西
  if (restaurants.length<1) {
    res.render('index', {restaurants: restaurants, keyword: req.query.keyword+"(此搜尋沒有結果)" })
    return
  }

  res.render('index', {restaurants: restaurants, keyword: req.query.keyword })
})

app.listen(port, () => {
  console.log('running on 3000')
})
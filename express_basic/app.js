const express = require('express')
const app = express()

const port = 3000

app.get('/',(req,res) => {
  res.send('just try yoyoyoyoy')
})

app.get('/food/:region',(req,res) => {
  console.log(req.params.region)
  const test = req.params.region
  res.send(`good, your region is ${test}`)
})

app.listen(port, ()=>{
  console.log(`run on localhost/${port}`)
})

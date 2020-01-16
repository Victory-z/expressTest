const express = require('express')
const bodyParser = require('body-parser')
const MongoCilent = require('mongodb').MongoClient
const app = new express()

app.set('view engine','ejs')

app.use(express.static('./static'))

app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
  res.send('展示所有')
})
// app.post('/addNews',(req,res)=>{

// })

app.get('/news',(req,res)=>{
  res.render('news',{
    title:'标题',
    list:[
      {name:'第一个'},
      {name:'第二个'}
    ]
  })
})
app.listen('3000')
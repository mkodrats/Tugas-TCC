
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const bootstrap = require('express-bootstrap-service')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bootstrap.serve)
app.use(express.static('public'))
app.use(express.static('view'))

bootstrap.init({
    minified: false
});

// app.listen(3000, function() {
//   console.log('listening on 3000')
// })
app.get('/', (req, res) => {

  res.sendFile(__dirname + '/index.html')
  // res.sendFile(__dirname + 'bootstrap/css/bootstrap.min.css')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/blog', (req, res) => {
  db.collection('blog').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/', (req, res) => {
  var cursor = db.collection('blog').find()
})


var db

MongoClient.connect('mongodb://admin:admin@ds227035.mlab.com:27035/tugas-tcc', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

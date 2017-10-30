
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const bootstrap = require('express-bootstrap-service')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bootstrap.serve)
app.use(express.static('public'))
app.use(express.static('views'))

app.set('view engine', 'ejs')

bootstrap.init({
    minified: false
});

app.get('/', (req, res) => {
  db.collection('blog').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result})
  })
})


app.post('/blog', (req, res) => {
  db.collection('blog').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/delete/:id', function (req, res) {
  db.findById(id, function (err, doc) {
  if (err) {
    message.type = 'Error!';
  }
  doc.remove(callback); //Removes the document
  });

var db

MongoClient.connect('mongodb://admin:admin@ds227035.mlab.com:27035/tugas-tcc', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

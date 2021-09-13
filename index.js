const express = require('express')
const exphbs  = require('express-handlebars');

app = express()
app.use(express.static('public'))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index')
})

app.post('/settings', function (req, res) {
    res.render('settings')
})

app.post('/action', function (req, res) {
    res.render('index')
})

app.get('/actions', function (req, res) {
    res.render('index')
})

app.get('/actions/:type', function (req, res) {
    res.render('index')
})

var PORT = 3007
app.listen(PORT, function () {
    console.log("web server starting")
})
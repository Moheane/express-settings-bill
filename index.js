const express = require('express')
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const settingssbill = require('./settings_bill');

app = express()
app.use(express.static('public'))
const settingsbill = settingssbill();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// configure handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//create routes

app.post('/settings', function (req, res) {
    console.log(req.body);
    
    settingsbill.setSettings({
        callCost: req.body.callCost,
        smsCost: req.body.smsCost,
        criticalLevel: req.body.criticalLevel,
        warningLevel: req.body.warningLevel
    })

    res.redirect('/');
    console.log(settingsbill.getSettings())
    console.log(settingsbill.getSettings().smsCost)
})
app.get('/', function (req, res) {
    res.render('index')
})

app.post('/action', function (req, res) {

})

app.get('/actions', function (req, res) {

})

app.get('/actions/:type', function (req, res) {

})


//configure and run server
var PORT = 3007
app.listen(PORT, function () {
    console.log("web server starting")
})
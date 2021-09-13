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

    
    console.log(settingsbill.getSettings())
    console.log(settingsbill.getSettings().smsCost)
    res.redirect('/');
})
app.get('/', function (req, res) {
    res.render('index', {
        totals: settingsbill.totals()
       
    })
})

app.post('/action', function (req, res) {
    settingsbill.recordAction(req.body.billItemTypeWithSettings)
    res.redirect('/');
})

app.get('/actions', function (req, res) {
    res.render('actions', {actions: settingsbill.actions()})
})

app.get('/actions/:type', function (req, res) {
    const acType = req.params.type;
    res.render('actions', {actions: settingsbill.actionsFor(acType)})
})


//configure and run server
var PORT = 3009
app.listen(PORT, function () {
    console.log("web server starting")
})
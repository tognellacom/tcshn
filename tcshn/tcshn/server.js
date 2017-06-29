var express = require('express')
var app = express()
var fs = require('fs')
var conf = require('nconf')

// Require Routes for Express.js
var rtindex = require('./routes/index')
var rtmodulesapi = require('./routes/modules-api')


conf.argv()
    .env()
    .file({ file: 'config/config.json' })


app.set('view engine', 'pug')

app.use(express.static('public'))

//Routes for application
app.use('/modules-api', rtmodulesapi)
app.use('/', rtindex)


conf.save(function (err) {
    fs.readFile('config/config.json', function (err, data) {
        console.dir(JSON.parse(data.toString()))
    });
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

module.exports = app;

var express = require('express')
var app = express()
var routes = require('./routes')
var authentication = require('./authentication')
var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use('/', routes)


app.listen(3000, '127.0.0.1', () => {
    console.log('Example app listening on port 3000!');
});

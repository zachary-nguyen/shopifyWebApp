
var express = require('express');
var app = express();
var path = require('path')

app.use(express.static(__dirname + '/www'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen('3000');
console.log('working on 3000');

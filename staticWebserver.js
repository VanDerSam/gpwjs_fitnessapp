var express = require('express');
const cors = require('cors');
var app = express();

app.use(cors({
    origin: '*'
}));
app.use('/userData', express.static(__dirname + '/userData'));

var server = app.listen(5000);
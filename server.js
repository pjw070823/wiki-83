var express = require('express');
var fs = require('fs');
var app = express();
var port = 8080;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/docs/:name', function(req, res) {
    const filePath = __dirname + '/docs/' + req.params.name + '.html';
    
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.send('File not found');
        } else {
            res.sendFile(filePath);
        }
    });
});

app.listen(port);
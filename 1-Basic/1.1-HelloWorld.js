var express = require('../node_modules/express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);

//https://www.tutorialspoint.com/expressjs/expressjs_hello_world.htm
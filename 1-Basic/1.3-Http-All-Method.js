var express = require('../node_modules/express');
var app = express();


app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });

 app.listen(3000, function() {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
 });

// https://www.tutorialspoint.com/expressjs/expressjs_routing.htm
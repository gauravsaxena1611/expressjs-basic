var express = require('Express');
var app = express();

var router_example = require('./2.1.1-Routers-Examples.js');

//both index.js and things.js should be in same directory
app.use('/show', router_example);

app.listen(3000, function() {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
 });

 //https://www.tutorialspoint.com/expressjs/expressjs_routing.htm
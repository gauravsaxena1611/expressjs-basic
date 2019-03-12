var express = require('../node_modules/express');
var app = express();

//Simple request time logger
app.use(function(req, res, next){
    console.log("A new request received at " + Date.now());
    
    //This function call is very important. It tells that more processing is
    //required for the current request and is in the next middleware
    next();
 });

//Middleware function to log request protocol
app.use('/things', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   next();
});

// Route handler that sends the response
app.get('/things', function(req, res){
   res.send('Things');
});

 //Other routes here
 app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

app.listen(3000, function() {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
 });

 // https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm
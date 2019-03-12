var express = require('../node_modules/express');
var app = express();

app.get('/', function(req, res){
   //Create an error and pass it to the next function
   var err = new Error("Something went wrong");
   next(err);
});

/*
 * other route handlers and middleware here
 * ....
 */

//An error handling middleware
app.use(function(err, req, res, next) {
   res.status(500);
   res.send("Oops, something went wrong.")
});

//Other routes here
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
  });

app.listen(3000, function() {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
 });

 // https://www.tutorialspoint.com/expressjs/expressjs_error_handling.htm
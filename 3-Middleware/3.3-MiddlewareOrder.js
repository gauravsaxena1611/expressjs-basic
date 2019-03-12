
var express = require('../node_modules/express');
var app = express();

//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});

app.use('/', function(req, res){
    console.log('End');
 });
 

//Other routes here
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
  });
  
  app.listen(3000, function() {
      console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
   });


/** the first function executes first, then the route handler and then the end function. 
 * This example summarizes how to use middleware before and after route handler; 
 * also how a route handler can be used as a middleware itself. 
 * 
 * When we visit '/' after running this code, we receive the response as Middle and 
 * on our console −
 * Start
 * End
 */
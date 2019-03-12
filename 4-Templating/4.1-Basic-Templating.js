
var express = require('../node_modules/express');
var app = express();

app.set('view engine', 'pug');
app.set('views','../views');

app.get('/first_template', function(req, res){
    res.render('first_view');
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

 //https://www.tutorialspoint.com/expressjs/expressjs_templating.htm 
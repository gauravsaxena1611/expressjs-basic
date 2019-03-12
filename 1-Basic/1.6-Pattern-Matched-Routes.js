var express = require('../node_modules/express');
var app = express();

app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

 //Other routes here
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

 app.listen(3000, function() {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
 });

 // https://www.tutorialspoint.com/expressjs/expressjs_url_building.htm
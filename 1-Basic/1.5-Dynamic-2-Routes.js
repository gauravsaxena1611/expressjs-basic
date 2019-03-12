var express = require('../node_modules/express');
var app = express();

app.get('/things/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

app.listen(3000, function() {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
 });

 // https://www.tutorialspoint.com/expressjs/expressjs_url_building.htm
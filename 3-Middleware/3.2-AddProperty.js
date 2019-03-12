var express = require('../node_modules/express');
var app = express()

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

 //Other routes here
 app.get('*', function(req, res){
  res.send('Sorry, this is an invalid URL.');
});

app.listen(3000, function() {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
 });


 // https://expressjs.com/en/guide/writing-middleware.html
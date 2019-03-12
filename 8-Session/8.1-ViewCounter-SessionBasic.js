var express = require('../node_modules/express');
var cookieParser = require('../node_modules/cookie-parser');
var session = require('../node_modules/express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});

app.listen(3000, function () {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
});


/** What the above code does is, when a user visits the site, 
 *  it creates a new session for the user and assigns them a cookie. 
 *  Next time the user comes, the cookie is checked and the page_view session variable 
 *  is updated accordingly. */
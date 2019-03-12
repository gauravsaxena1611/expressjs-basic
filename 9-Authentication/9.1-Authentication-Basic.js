var express = require('../node_modules/express');
var app = express();
var bodyParser = require('../node_modules/body-parser');
var multer = require('../node_modules/multer');
var upload = multer();
var session = require('../node_modules/express-session');
var cookieParser = require('../node_modules/cookie-parser');

// app.set('view engine', 'jade');
app.set('view engine', 'pug');
app.set('views', '../views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cookieParser());
app.use(session({ secret: "Your secret key" }));

var Users = [];

app.get('/signup', function (req, res) {
    res.render('signup');
});

app.post('/signup', function (req, res) {
    if (!req.body.id || !req.body.password) {
        res.status("400");
        res.send("Invalid details!");
    } else {
        Users.filter(function (user) {
            if (user.id === req.body.id) {
                res.render('signup', {
                    message: "User Already Exists! Login or choose another user id"
                });
            }
        });
        var newUser = { id: req.body.id, password: req.body.password };
        Users.push(newUser);
        req.session.user = newUser;
        res.redirect('/protected_page');
    }
});

//Other routes here
app.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});


app.listen(3000, function () {
    console.log('Server Started; Server is live on port 3000: http://localhost:3000/');
});
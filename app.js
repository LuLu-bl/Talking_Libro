var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('./models');
var bcrypt = require('bcrypt');
var expressSession = require('express-session');
var passport =require('passport');
var LocalStrategy = require('passport-local').Strategy;


var User = mongoose.model('User');

mongoose.connect('mongodb+srv://talkniglibro:talkinglibro@cluster0.mf8vv.mongodb.net/talkinglibro?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
  secret: "Onedaymistakeswillbetheworldlargestcompany"
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password"
}, function (email, password, next){
  User.findOne({
    email: email
  }, function (err,user){
    if (err) return next (err);
    if (!user || !bcrypt.compareSync(password, user.passwordHash)){
      return next ({message: 'Email or Password incorrect'})
    }
    next(null, user);
  })
}));

passport.use('signup-local',new LocalStrategy({
  usernameField: "email",
  passwordField: "password"
}, function (email, password, next){
  User.findOne({
    email: email
  }, function (err, user) {
    if (err) return next(err);
    if (user) return next({message: "User Already Exist"});
    let newUser = new User({
      email: email,
      passwordHash: bcrypt.hashSync(password, 10)
    })
    newUser.save(function (err) {
      next(err, newUser);
    });
  });
}));


passport.serializeUser(function (user, next){
  next(null, user._id);
});

passport.deserializeUser(function (id,next){
  User.findById(id, function (err, user){
    next(err,user);
  });
});

app.get('/', function (req, res,next) {
  res.render('index', {title:"SaaS tutorial"})
})

app.get('/billing', function (req, res,next) {
  res.render('billing')
})

app.get('/SinhalaBooks', function (req, res,next) {
  res.render('SinhalaBooks')
})

app.get('/SinhalaSurangana', function (req, res,next) {
  res.render('SinhalaSurangana')
})

app.get('/Sinhalalama', function (req, res,next) {
  res.render('Sinhalalama')
})

app.get('/Tabaya', function (req, res,next) {
  res.render('Tabaya')
})

app.get('/SinhalaSurangana', function (req, res,next) {
  res.render('SinhalaSurangana')
})

app.get('/Magulkema', function (req, res,next) {
  res.render('Magulkema')
})


app.get('/HathpethiMala', function (req, res,next) {
  res.render('HathpethiMala')
})

app.get('/EnglishBooks', function (req, res,next) {
  res.render('EnglishBooks')
})

app.get('/EnglishChildren', function (req, res,next) {
  res.render('EnglishChildren')
})

app.get('/WoodyWood', function (req, res,next) {
  res.render('WoodyWood')
})

app.get('/TamilBooks', function (req, res,next) {
  res.render('TamilBooks')
})

app.get('/TamilNovels', function (req, res,next) {
  res.render('TamilNovels')
})

app.get('/KazhulugumPurawum', function (req, res,next) {
  res.render('KazhulugumPurawum')
})

app.get('/Novels', function (req, res,next) {
  res.render('Novels')
})

app.get('/notReleased', function (req, res,next) {
  res.render('notReleased')
})

app.get('/logout', function (req,res,next){
  req.logout();
  res.redirect('/');
})

app.get('/walkthrough', function (req, res,next){
    req.session.sawWalkthrough = true;
    res.end();
})

app.get('/complicated', function (req, res,next){
    console.log(req.session.sawWalkthrough);
})

app.get('/main', function (req, res,next) {
  res.render('main')
});

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login-page' }),
    function(req, res) {
      res.redirect('/main');
    });

app.get('/login-page', function (req,res, next){
  res.render('login-page')
})

app.get('/Aboutus', function (req,res, next){
  res.render('Aboutus')
})

app.post('/signup',
      passport.authenticate('signup-local', { failureRedirect: '/' }),
      function(req, res) {
        res.redirect('/main');
      });






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

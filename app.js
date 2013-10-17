
/**
 * Module dependencies.
 */

var express = require('express')
  , puzzle = require('./routes/index')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());  
app.use(express.session({ secret: 'secret'}));
app.use(app.router);
app.use(express.static(__dirname + '/public'));

/// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes

app.get('/new', puzzle.new);
app.get('/list', puzzle.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
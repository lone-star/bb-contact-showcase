
/**
 * Module dependencies.
 */

var express = require('express')
  , routes  = require('./routes')
	,	fs      = require('fs');

var app = module.exports = express();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
	app.set('view options', {layout: false});
	app.engine('.html', function (path, options, fn) {
		fs.readFile(path, 'utf8', function (err, str) {
			if (err) return fn(err);
			fn(null, str);
		});
	});
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use('/public', express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

// Data Model
app.get('/contact', routes.contact);

// Data Schema
app.get('/contact-schema', routes.contactSchema);

var server = app.listen(3000);
console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);

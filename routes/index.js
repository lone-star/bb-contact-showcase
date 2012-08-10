
/*
 * GET home page.
 */

var _ = require('underscore')._;

exports.index = function(req, res){
  res.render('index.html');
};

//This is the data that we are sending
exports.contact = function (req, res) {
	res.json({
		_id: '1'
	,	first_name: 'Michael'
	,	last_name: 'Phelps'
	,	age: 27
	,	job: 'swimmer'
	,	twitter: 'http://twitter.com/MichaelPhelps'
	});
};

//This will return the schema of a contact.
//In here, the contact only contains an HTML template
exports.contactSchema = function (req, res) {
	var htmlTemplate = '<p>My name is {{first_name}}.'
									 + ' I am {{age}} years old, and'
	 			 					 + ' I am a {{job}}!'
									 + '{{twitter_link twitter}}';
	res.json({
		_id: '1'
	,	template: htmlTemplate
	});
};

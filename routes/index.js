
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

var generateCreateTemplate = function (schema) {
  return '<form>'
		+	_.reduce(schema, function (memo, item) {

			var html = [];
			switch (item.type) {
				case 'text':
					html.push('<label for="input_' + item.name + '">');
					html.push(item.label + '</label>');
					html.push('<input id="input_' + item.name + '" ');
					html.push('name="' + item.name + '" ');
					html.push('type="text" value="' + item.value + '">');
					html.push('</input>');
					break;
				case 'dropdown':
					html.push('<label for="input_' + item.name + '">');
					html.push(item.label + '</label>');
					html.push('<select id="input_' + item.name + '" ');
					html.push('name="' + item.name + '">');
					_.each(item.options, function (opt) {
						html.push('<option value="' + opt.value + '">');
						html.push(opt.label + '</options>');
					});
					html.push('</select>');
					break;
				default:
					console.log('Template generation warning:'
						+ ' Unkown "type" in schema.item.type');
			}
			return memo + '<br/>' + html.join('');
		}, '')
		+ '<input id="submit-button" type="submit" value="Create"/>'
		+ '</form>';
};

//This will return the schema of a contact.
//In here, the contact only contains an HTML template
exports.contactSchema = function (req, res) {

	//in: json object
	//out: html
	var schema = {
		create: [
			{	name: 'full_name'
			,	label: 'Full Name'
			,	value: ''
			,	type: 'text'
			}
		,	{	name: 'country'
			,	label: 'Country'
			,	options: [
					{label: 'France', value: 'fr'}
				,	{label: 'United Kingdom', value: 'uk'}
				,	{label: 'Germany', value: 'de'}
				,	{label: 'Finland', value: 'fi'}
				,	{label: 'China', value: 'cn'}
			]
			,	type: 'dropdown'
			}
		]
	};

	//Generate the create template
	var templateCreate = generateCreateTemplate(schema.create);

	var htmlTemplate = '<p>My name is {{first_name}}.'
									 + ' I am {{age}} years old, and'
	 			 					 + ' I am a {{job}}!'
									 + '{{twitter_link twitter}}';
	/*
	var templateCreate = '<form>'
		+ '<label for="name">Give name</label>'
		+ '<input id="name" name="username" type="text" value="def"/>'
		+ '<select name="sex"><option value="m">Male</option>'
			+ '<option value="f">Female</option>'
		+ '<select>'
		+	'<input id="submit-button" type="submit" value="ok"/>'
		+ '</form>';
	*/
	res.json({
		_id: '1'
	,	template_create: templateCreate
	});
};

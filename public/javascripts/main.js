$(function () {

	//Helpers
	
	//This helper just displays a link to a twitter account
	Handlebars.registerHelper('twitter_link', function (link) {
		return new Handlebars.SafeString(
				'<br/>Check out my twitter: <a href="' + link + '">' + link + '</a>'
			);
	});

	//Models
	//Here, we only need the schema of the model and the content of
	//the data.
	var Contact = {};
	Contact.Data = Backbone.Model.extend({
		url: '/contact'
	});
	Contact.Schema = Backbone.Model.extend({
		url: '/contact-schema'
	});

	var contact = new Contact.Data()
	,	contactSchema = new Contact.Schema();

	//Fetching from the webservice
	contact.fetch()
		.success(function () {
			contactSchema.fetch()
				.success(dataLoaded);
		});

	//displaying the data inside an HTML
	var dataLoaded = function () {
		//Compiling the template file
		var parser = Handlebars.compile(contactSchema.get('template'));
		//displaying the content of contact with the parse function
		document.getElementById('contact').innerHTML =
			parser(contact.toJSON());
	};

});

$(function () {

	//definition of the record manager
	var RecordManager = function (params) {
		//the schema that we get from the server
		var Schema = Backbone.Model.extend({
			url: params.url
		})
		,	schemaUpdated = _.bind(function () {
			_.bind(params.ready, this)();
		}, this);

		this.schema = new Schema();
		this.schema.fetch().success(schemaUpdated);
	};

	//The functions associated with the record manager
	
	//CreateView
	RecordManager.prototype.createView = function () { 
		//the template for the create function
		var template = Handlebars.compile(this.schema.get('template_create')) 
		,	View = Backbone.View.extend({
				template: template
			,	events: {
					'click #submit-button': 'submit'
				}
			,	render: function () {
					console.log('render')
					$(this.el).html(this.template());
					return this;
				}
			,	submit: function () {
					var form = document.forms[0]
					,	newModel = {};
					_.each(form, function (el) {
						if (el.id !== 'submit-button') {
							newModel[el.name] = el.value;
						}
					});
					console.log('create a new model:');
					console.log(newModel);
					return false;
				}
		});
    return new View({});
	};

	//DetailsView

	//Make the instance of the views
	var contactManager = new RecordManager({
		url: '/contact-schema'
	,	ready: function () {
			console.log('ready');
			$('#contact').html(this.createView().render().el);
		}
	});

	
	//adding the view to the page
//	$('contact').html(contactManager.createView().render().el);


	
	/*
	//Abstract Schema
	//The schema of an abstract Model
	//
	//Public:
	//	-getFormNew
	//	-getList
	//	-getDetails
	//	-getFormEdit
	//	-getFormSearch
	//
	//Private:
	//	-getDefAttr
	var AbstractSchema = BackBone.Model.extend({
		getFormNew: function () {
			var parser = Handlebars.compile(this.get('form_new'));
			return parser(this.get('default_attr'));
		}
	,	getList: function (collection) {
			var parser = Handlebars.compile(this.get('list'));
			return parser(collection.toJSON());
		}
	,	getCollectionURL: function () { return this.get('collection_url') }
	});
	
	//Contact Schema
	//
	var ContactSchema = AbstractSchema.extend({
		url: '/contact-schema'
	});

	//Abstract Record Collection
	//
	//public:
	//	-getSchema
	//	-model
	//	-RecordCollection
	var RecordCollection = Backbone.Collection.extend({
		initialize: function (schema) {
			this.url = schema.getcollectionURL();
			this.schema = schema;
		}
	,	getSchema: function () { return this.schema; }
	});
	


	//Handlebars Helpers
	
	//text helper
	Handlebars.registerHelper('form_new_input_text', function (input) {
		return new Handlebars.SafeString(
			'<label for="form-new-input-text-' + input.name + '">' + input.label + '</label>' +
			'<input id="form-new-input-text-' + input.name
				+ '" type="' + input.type
				+ '" name="' + input.name
				+ '" value="' + input.default_value + '" />'	
		);
	});
	
	//list helper
	Handlebars.registerHelper('form_new_input_dropdown', function (input) {
		var eachOption = function (list) {
			return _.reduce(list, function (memo, item) {
				return memo + '<option value="' + item.value + '">' + item.label + '</option>';
			}, '');
		};
		return new Handlebars.SafeString(
			'<label for="form-new-input-dropdown-' + input.name + '">' + input.label + '</label>' +
			'<select id="form-new-input-dropdown-' + input.name + '">' +
			eachOption(input.options) +
			'</select>'
		);
	});

    */





	/*
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
	*/

});

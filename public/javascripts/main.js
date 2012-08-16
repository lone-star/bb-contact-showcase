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

});

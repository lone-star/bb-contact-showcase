BB-contact-showcase

This showcase demonstrates a way of using client-side templating with a client which has minimal knowledge of the template's content, and the models themselves.
This pattern is not breaking any MV*, it only moves the view part to the server, thus it should be studied more in dept.

The server side application is located in [/routes/index.js](http://github.com/benjamin-michel/bb-contact-showcase/blob/master/routes/index.js), it consists of three parts:
- Providing the index.html file
- Serving the Model data
- Serving the Template data

The client application is located in [/public/javascripts/main.js](http://github.com/benjamin-michel/bb-contact-showcase/blob/master/public/javascripts/main.js). It consists of four parts:
- Model's URL definition
- Handlebar helpers registering
- Fetch request for retrieving the data
- Function to parse+display data inside div
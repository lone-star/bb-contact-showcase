# BB-contact-showcase

## Install
To install:
- Have node installed
- Do `npm install` on the dependancies defined in [/package.json](http://github.com/benjamin-michel/bb-contact-showcase/blob/master/package.json) (express, underscore)

## Run
To run, do `node app.js`

## Description

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

## License

Copyright (C) 2012 Benjamin Michel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
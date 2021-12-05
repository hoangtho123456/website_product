var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require("mongoose"),
  Task = require("./api/models/todoListModel"); //created model Loading here
  bodyParser = require("body-parser");

//mongoose instance connection url
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require("./api/routes/todoListRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log('TODO List RestfulAPI server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + 'not found!'});
});

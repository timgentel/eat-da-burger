var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var routes = require("./controllers/burgers_controller.js");



var app = express();
var PORT = process.env.PORT || 8080;

// Static directory
app.use(express.static(process.cwd() +  "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use("/", routes);



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
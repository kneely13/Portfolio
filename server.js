const express = require('express');
// const mysql = require("mysql");
const bodyParser = require('body-parser')
// const orm = require('orm');
// const routes = require("/views/index.handlebars");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
var app = express();
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.get('/', function(){
    return 'hello world'
})
// orm.select('/burgers', 'burger_names')
// app.use("/", routes)

app.listen(PORT, () => {
    console.log("The sever is starting at PORT " + PORT);
});
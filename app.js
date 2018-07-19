const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
require('dotenv').config()


// VIEW ENGINE SETTINGS
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//ROUTES
var router = require('./routes/index');

app.use('/', router);


// SET PORT 
app.listen(process.env.PORT);
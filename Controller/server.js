const express = require('express')
const bodyParser = require('body-parser')
const qr = require("qrcode");
const axios = require('axios');
require('dotenv').config() 

// setting global attributes
var connectionId = null;
var retrievedAttribute = null;

// initiating the express js
const app = express()

// setting up the server side render engine  
app.set("view engine", "ejs");

// setting up various parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
/*************************************************************
 *  ALL OF YOUR API SHOULD BE WRITTEN BELOW THIS LINE
*************************************************************/



// YOU WILL WRITE CODE BETWEEN IN THIS AREA



/*************************************************************
 *  ALL OF YOUR API SHOULD BE ABOVE THIS LINE
*************************************************************/
app.listen(9999, () => {
	console.log('Server up at 9999')
	// global.connectionId = "44baf04c-911d-4191-9e84-e115c9101ec6"
})
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8080;

const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log('server is running')
    console.log(`On localhost: ${port}`);
  };

//GET Route
app.get('/all', sendData);

function sendData (req, res) {
    res.send(projectData);
};

// Post Route
app.post('/postroute', userInput);

function userInput (req, res){
    //delete later next two lines
    res.send("Post route doing something");
    console.log(req.body);
    let newInput = req.body;
    projectData = {
        temp: newInput.temp,
        date: newInput.date,
        userResponse: newInput.userResponse
    }
    //for debugging
console.log(projectData)
};

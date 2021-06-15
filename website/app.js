const { response } = require("express");

/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zipcode=';
const apiKey = '&appid=7d34d64a305fd6f7ece9ef8d4d1498c0';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', doSomething);

/* Function called by event listener */
function doSomething(e) {
    const zipCode = document.getElementById('zip').value;
    getWeather(baseURL, zipCode, apiKey)
};

/* Function to GET Web API Data*/
async function getWeather(baseURL, zipcode, apiKey) {
    const res = await fetch(baseURL+zipcode+apiKey)
    try {
        const weather = await res.json();
        console.log(weather)
        return weather;
        //handle error
      }  catch(error) {
        console.log("error", error);
      }
};


// Function to POST data 
async function postData(url = '', weather = {}) {
  const res = await fetch(url, {
    method: POST,
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(weather),
  })
  try {
    const responseData = await response.json();
      return responseData
  }catch(error){
  console.log('That is not what was supposed to happen', error);
  }
}

//Function to GET Project Data


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();*/
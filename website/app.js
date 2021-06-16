// Global Variables
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '7d34d64a305fd6f7ece9ef8d4d1498c0';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', doSomething);

// Function called by event listener 
function doSomething(e) {
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    // given by Udacity
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

    getWeather(baseURL, zip, apiKey)
    .then(function(data) {
      const temp = data.main.temp;
      const someWeather = {
        temp: temp,
        date: newDate,
        userResponse: feelings
      };
      console.log(someWeather);
      // calling PostData function to post weather data to POST route on server
      postData('/postroute', someWeather)
    })
    //.then to chain function that changes UI
};

//Function to GET Web API Data
async function getWeather(baseURL, zip, apiKey) {
    const res = await fetch(baseURL+"zip="+zip+"&appid="+apiKey)
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
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(weather),
  })
  try {
    const newInput = await res.json();
      return newInput;
  }catch(error){
  console.log('That is not what was supposed to happen', error);
  }
}

//Function to GET Project Data to change UI



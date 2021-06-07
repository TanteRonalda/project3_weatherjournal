/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zipcode=';
let apiKey = 'd644ccb2826ff543a2ed8c0f705e5671';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    const zip = document.getElementById('zip').value;
    getDataNow(baseURL, zip, baseURL)
};

/* Function to GET Web API Data*/
async function getWeatherData(baseURL, zipcode, apiKey) {
    const res = await fetch(baseURL+zipcode+apiKey)
    try {
        const data = await res.json();
        console.log(data)
        return data;
        //handle error
      }  catch(error) {
        console.log("error", error);
      }
}

/* Function to POST data */


/* Function to GET Project Data */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

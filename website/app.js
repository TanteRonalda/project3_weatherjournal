/* Global Variables */

// Personal API Key for OpenWeatherMap API
// fehlt noch was hinter dem Fragezeichen
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
let apiKey = 'd644ccb2826ff543a2ed8c0f705e5671';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
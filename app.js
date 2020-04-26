// WeatherStack - free tier weather API
// Key: ab904fc7fce97ee1d90e837958baa66b
// URI: http://api.weatherstack.com/current

const request = require('postman-request')

const url = 'http://api.weatherstack.com/current'
const apiKey = 'ab904fc7fce97ee1d90e837958baa66b'
const location = 'New York'
const apiRequest = (url + '?access_key=' + apiKey +'&query=' + location)

/*const weather = */request(apiRequest, (error, response) => {
    let data = JSON.parse(response.body)
    console.log(data.current)
})

// console.log(weather)
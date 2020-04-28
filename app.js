// WeatherStack - free tier weather API
// Key: ab904fc7fce97ee1d90e837958baa66b
// URI: http://api.weatherstack.com/current

const request = require('postman-request')

const url = 'http://api.weatherstack.com/current'
const apiKey = 'ab904fc7fce97ee1d90e837958baa66b'
const location = 'New York'
const units = 'f'
const apiRequest = (url + '?access_key=' + apiKey +'&query=' + location + '&units=' + units)

/*const weather = */
request({uri: apiRequest, json: true}, (error, response) => {
    // let data = JSON.parse(response.body)
    let data = response.body

    console.log(`In ${data.location.name}, it is ${data.current.temperature} degrees out, but it feels more like ${data.current.feelslike}!`)

})

// console.log(weather)
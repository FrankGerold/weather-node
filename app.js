// WeatherStack - free tier weather API
// Key: ab904fc7fce97ee1d90e837958baa66b
// URI: http://api.weatherstack.com/current

// Map Box
// Key: pk.eyJ1IjoiY2FsbGlweWdvdXMiLCJhIjoiY2s5andsZ2Q5MW16czNscDR6amdia242ZiJ9.Mf228tFEWVePSZTipf7yUg
// URI: https://api.mapbox.com/geocoding/v5/mapbox.places/

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// geocode('ny', (e, d) => forecast(d, console.log(e, d)))

// geocode('nj', (err, loc) => {
//     forecast(loc, (e, r) => {e, r})
// })

const search = process.argv[2]

    if (!search) {
        return console.log('Please input a location!')
    }
    else {
        geocode(search, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data, (e, d) => {
            if (e) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(d.result())
        })
    })
}
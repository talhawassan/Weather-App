const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
   const url = 'http://api.weatherstack.com/current?access_key=265594d95bac1eba03cb1573413047ff&query=' + latitude + ',' + longitude
   request({url, json: true}, (error, { body }) => {  //destructuring is done here from response.body
       if(error) {
        callback('Unable to connect to weather services!', undefined)
       }else if (body.error) {
        callback('Unable to find location', undefined)
       }else{
        callback(undefined, `${body.current.weather_descriptions[0]} .It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}%  .There is ${body.current.precip}% chance of rain today. Local time ${body.location.localtime}`)
       }
   })
}

module.exports = forecast
const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidGFsaGFuYWplZWIiLCJhIjoiY2t2cWVkcTJyMWRtbDJwcXNjaWltNmxuNSJ9.IVhmhhQ1DhrTKE2WlqqDIQ&limit=1'
    request({ url, json: true }, (error, { body }) => {  //destructuring is done here from response.body
        if(error){
            callback('unable to connect to geocode services', undefined)
        }else if (body.features.length === 0){
            callback('unable to find location. please search another location', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
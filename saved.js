var request = require ("request")
request({
url: 'http://api.geonames.org/findNearbyJSON',
qs: {username: 'Mary-Theresa', formatted: true, lat: 48.865618158309374, lng: 2.344207763671875, style: "full"}, 
method: 'POST',
}, function(error, response, body){
if(error) {
    console.log(error);
} else {
    console.log(response.statusCode, body);
}
});
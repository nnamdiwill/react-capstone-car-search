require('babel-polyfill');
require('superagent');

request
   .post('https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=kvytjhenbcuxked2g4r89zm9')
   .send({ make: 'Chevy', model: 'camaro' })
   .set('API-KEY', 'kvytjhenbcuxked2g4r89zm9')
   .set('Car', 'application/json')
   .end(function(err, res){
     if (err || !res.ok) {
       alert('Oh no! error');
     } else {
       alert('yay got ' + JSON.stringify(res.body));
     }
   });


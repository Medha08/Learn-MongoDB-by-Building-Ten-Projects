const request = require('request');
const argv = require('yargs').argv;
let apiKey = 'b3ec66a76a55afb945a5cb72ccbf4b67';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${apiKey}`;


request(url,function(err,response,body){

  if(err){
    console.log('error:',error);
  }else{
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} C in ${weather.name}`;
    console.log(message);

  }

});

const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=1d91c4e2c196f11c639601087c1dbbb5&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search!", undefined);
    } else {
      callback(
        undefined,
        "Weather is " +
          body.current.weather_descriptions[0] +
          ". Current temperate: " +
          body.current.temperature +
          ". Feels like: " +
          body.current.feelslike +
          ". The humidity is: " +
          body.current.humidity +
          "%."
      );
    }
  });
};

module.exports = forecast;

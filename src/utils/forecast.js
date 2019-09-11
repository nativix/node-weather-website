const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/8e096bc61b524aef5d1cb5ba73bb1dff/${latitude},${longitude}?units=si`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect the weather service!');
    } else if (body.error) {
      callback('Unable to find location');
    } else {
      const ob = body.currently;
      callback(
        undefined,
        `Forecast says: ${ob.summary}. It's currently ${
          ob.temperature
        } degrees out. There is a ${ob.precipProbability * 100}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;

var axios = require('axios');
// var moment = require('moment');

var helpers = {
  getAirQuality: function(query) {
    var location = query.replace(/\s/, '+');
    var url = 'http://localhost:4567/baqi/?location=' + location

    console.log(url);

    return axios.get(url)
      .then(function(response){
        return response.data;
      });
  }
  // To implement later
  // getWeeklyAir: function(query) {
  //   var location = query.replace(/\s/, '+');
  //   var url = 'http://localhost:4567/baqi/?start_datetime=' + start + '&end_datetime=' + end + '&location=' + location;
  // }
};

module.exports = helpers;
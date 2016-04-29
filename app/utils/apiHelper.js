var axios = require('axios');
// var moment = require('moment');

var helpers = {
  getAirQuality: function(query) {
    var location = query.replace(/\s/, '+');
    var url = '/baqi/?location=' + location

    return axios.get(url)
      .then(function(response){
        console.log(response.data);
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

var React = require('react');
var SearchContainer = require('../containers/SearchContainer');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Why does air quality matter?</h3>
        <p>Your local air quality affects how you breathe and can impact your health. Like the weather, air quality changes from day to day.</p>
        <SearchContainer />
      </div>
    )
  }
});

module.exports = Home;

var React = require('react');
var SearchContainer = require('../containers/SearchContainer');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Air Quality</h1>
        <SearchContainer />
      </div>
    )
  }
});

module.exports = Home;

var React = require('react');
var Search = require('./Search');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Air Quality</h1>
        <Search />
      </div>
    )
  }
});

module.exports = Home;

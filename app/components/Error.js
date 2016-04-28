var React = require('react');
var SearchContainer = require('../containers/SearchContainer');

function Error() {
  return (
    <div>
      <p>Cannot find location. Please retry.</p>
      <SearchContainer />
    </div>
  )
}

module.exports = Error;

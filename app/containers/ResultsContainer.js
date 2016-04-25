var React = require('react');
var Results = require('../components/Results');
var PropTypes = React.PropTypes;
var apiHelper = require('../utils/apiHelper');

var ResultsContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      airQuality: {}
    }
  },
  componentDidMount: function() {
    var query = this.props.params.location;
    apiHelper.getAirQuality(query)
    .then(function(data){
        this.setState({
          isLoading: false,
          airQuality: data
        })
      }.bind(this))
  },
  render: function() {
    return (
      <Results
        header={this.props.params.location}
        isLoading={this.state.isLoading}
        airQuality={this.state.airQuality}
      />
    );
  }
});

module.exports = ResultsContainer;

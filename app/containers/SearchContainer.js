var React = require('react');
var Search = require('../components/Search');

var SearchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      airLoc: ""
    }
  },
  handleUpdateSearch: function(e) {
    this.setState({
      airLoc: e.target.value
    });
  },
  handleSubmitSearch: function(e) {
    e.preventDefault();
    console.log(this.state.airLoc);
    var airLoc = this.state.airLoc
    this.setState({
      airLoc: ""
    });
    this.context.router.push({
      pathname: '/results/' + this.state.airLoc
    })
  },
  render: function() {
    return (
      <Search
        onUpdateSearch = {this.handleUpdateSearch}
        onSubmitSearch = {this.handleSubmitSearch}
        airLoc = {this.state.airLoc}
        />
    )
  }
});

module.exports = SearchContainer;

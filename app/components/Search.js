var React = require('react');

var Search = React.createClass({
  getInitialState: function() {
    return {
      query: ""
    }
  },
  handleUpdateSearch: function(e) {
    this.setState({
      query: e.target.value
    });
  },
  handleSubmitSearch: function(e) {
    e.preventDefault();
    console.log(this.state.query);
    this.setState({
      query: ""
    });
  },
  render: function() {
    return (
      <div className='searchBox'>
        <form onSubmit={this.handleSubmitSearch}>
          <input
            onChange={this.handleUpdateSearch}
            type='text'
            value={this.state.query}
            placeholder="Enter your location" />
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
});

module.exports = Search;

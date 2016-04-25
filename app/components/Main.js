var React = require('react');
var styles = require("../styles/index");


var Main = React.createClass({
  render: function() {
    return (
      <div className="container" style={styles.default}>
        <h1>Air Quality Reports</h1>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
      </div>
    )
  }
});

module.exports = Main;

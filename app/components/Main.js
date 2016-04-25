var React = require('react');


var Main = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
      </div>
    )
  }
});

module.exports = Main;

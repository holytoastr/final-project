var React = require('react');

function Loading() {
  return (
    <div>
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
        <span className="sr-only">Loading...</span>
      </div>
  )
}

module.exports = Loading;

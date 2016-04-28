var React = require('react');
var AirDetails = require('./AirDetails');
var WeeklyAir = require('./WeeklyAir');
var Loading = require('./Loading');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Results(props) {
  var location = props.header.toUpperCase();
  return props.isLoading === true
    ? <Loading />
    : <div className='row'>
        <h2>Report for: {location}</h2>
        <AirDetails info={props.airQuality} />
        <Link to='/'>
          <button type='button' className='btn btn-info btn-lg' style={{marginTop: "60px", marginLeft: "85%"}}>Return</button>
        </Link>
      </div>
}

module.exports = Results;

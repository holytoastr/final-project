var React = require('react');
var PropTypes = React.PropTypes;
var styles = require("../styles/index");

function AirDetails (data) {
  var bgcolor = data.info.breezometer_color;
  return (
    <ul className="list-unstyled" style={styles.air}>
      <div className="col-md-4" style={{marginTop: "20px"}}>
        <div style={{borderRadius: "50%", width: "100px", height: "100px", marginLeft: "40%", marginBottom: "10px", backgroundColor: bgcolor}}></div>
        <li>{data.info.breezometer_description}</li>
        <li>Air Quality Index: {data.info.breezometer_aqi}/100</li>
      </div>

      <div className="col-md-8" style={styles.pollutant}>
        <li><em>Dominant pollutant: </em> {data.info.dominant_pollutant_description}</li>
        <li><em>Causes: </em> {data.info.dominant_pollutant_text.causes}</li>
        <li><em>Effects: </em> {data.info.dominant_pollutant_text.effects}</li>
      </div>
    </ul>
  );
}

AirDetails.propTypes = {
  info: PropTypes.shape({
    data_valid: PropTypes.bool,
    breezometer_color: PropTypes.string,
    breezometer_aqi: PropTypes.number,
    breezometer_description: PropTypes.string,
    dominant_pollutant_description: PropTypes.string,
  })
}

module.exports = AirDetails;

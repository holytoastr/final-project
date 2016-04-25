var React = require('react');
var PropTypes = React.PropTypes;
var styles = require("../styles/index");

function Search(props) {
  return (
    <div className='searchBox'>
      <form onSubmit={props.onSubmitSearch}>
        <input
          onChange={props.onUpdateSearch}
          type='text'
          value={props.airLoc}
          placeholder="Enter your address"
          style={styles.textBox}
        />
        <button className="btn btn-info btn-lg" style={styles.space} type='submit'>Search</button>
      </form>
    </div>
  )
}

Search.propTypes = {
  onUpdateSearch: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  airLoc: PropTypes.string.isRequired
}

module.exports = Search;

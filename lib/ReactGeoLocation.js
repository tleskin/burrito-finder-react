var React = require('react');

var ReactGeoLocation = React.createClass({

  _handleGeoPosition(position) {
    this.props.getCoords(position.coords);
  },

  _handleClick(e) {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._handleGeoPosition);
    }
  },

  render() {
    return (
      <div>
        <button onClick={this._handleClick}>Burrito Me!</button>
      </div>
    )
  }

});

module.exports = ReactGeoLocation;

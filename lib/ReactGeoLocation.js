var React = require('react');
import {Button, Card, Row, Col, Navbar, NavItem} from 'react-materialize';

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
         <Button waves='light' onClick={this._handleClick}>Burrito Me!</Button>
      </div>
    )
  }

});

module.exports = ReactGeoLocation;

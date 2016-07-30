const React = require('react');
const ReactDOM = require('react-dom');
const ReactGeoLocation = require ('./ReactGeoLocation');

require('./style.scss');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: '',
      lng: '',
      locations: false
    };
  }

  _getCoords(coords) {
    this.setState({
      lat: coords.latitude,
      lon: coords.longitude,
      locations: true
    });
  }

  render() {

    const style = {
       display: this.state.locations ? 'block' : 'none',
    }

    return (
      <div>
        <h1>Welcome to Burrito Finder!</h1>
        <ReactGeoLocation getCoords={this._getCoords.bind(this)} />
        <div style={style}>lat: {this.state.lat}, lon: {this.state.lon}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.application'));

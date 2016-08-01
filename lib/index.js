const React = require('react');
const ReactDOM = require('react-dom');
const ReactGeoLocation = require ('./ReactGeoLocation');
import $ from "jquery";
import {Button, Card, Row, Col, Navbar, NavItem, Collection, CollectionItem} from 'react-materialize';
require('./style.scss');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: '',
      longitude: '',
      locations: false,
      burritos: [],
      burritoCards: []
    };
  }

  _getCoords(coords) {
    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
      locations: true
    });

    this.getBurritos();
  }

  getBurritos() {
    $.ajax({
      url: `http://localhost:3001/api/v1/burritos/`,
      type: 'GET',
      data: { lat: this.state.latitude, lon: this.state.longitude },
      success: (response) => {
        this.setBurritos(response);
      }
    });
  }

  setBurritos(response){
    const burritos = response.map(function(burrito){
      return burrito.table
    });

    this.setState({ burritos: burritos });
  }

  resetBurritos(){
    debugger;
    this.setState({ burritos: [],
                    latitude: '',
                    longitude: '',
                    locations: false
                  });
  }

  render() {

    const style = {
       display: this.state.locations ? 'block' : 'none',
       color: 'white'
    }

    if(this.state.burritos.length > 0){
      var burritoCards = this.state.burritos.map((burrito) => {
        return (
          <div key={burrito.id}>
            <Col m={6} s={12}>
              <Card className='orange' textClassName='white-text'>
                <h3>{burrito.name}</h3>
                <h3>Distance: {burrito.distance}</h3>
                <img src={burrito.rating_large} alt="boohoo" className="img-responsive"/>
              </Card>
            </Col>
          </div>
        )
      });
    }

    return (
      <div>
        <Navbar brand='BurritoFinder' right>
          <NavItem><div style={style}>lat: {this.state.latitude}, lon: {this.state.longitude}</div></NavItem>
          <NavItem><ReactGeoLocation getCoords={this._getCoords.bind(this)} /></NavItem>
          <NavItem><Button waves='light' onClick={this.resetBurritos.bind(this)}>Reset</Button></NavItem>
        </Navbar>
        {burritoCards}
     </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.application'));

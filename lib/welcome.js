const React = require('react');
const ReactDOM = require('react-dom');
import {Button, Card, Row, Col, Navbar, NavItem, Collection, CollectionItem, CardPanel} from 'react-materialize';

export class Welcome extends React.Component {
  constructor() {
    super();
  }


  showWelcome(){
    debugger;
    this.props.showWelcome();
  }

  render(){

    const style = {
        textAlign: 'center'
    }

    return (
      <div className="container">
        <Row>
        <Col s={12} m={12}>
        <CardPanel className="teal lighten-4 black-text">
        <div className="container">
          Welcome to Burrito Finder! I originally built this app while at the Turing School of Software and Design. This is a rebuild using React. I'm working on integrating maps again and am planning on a Native iOS/Android app built with React Native.
        </div>
        <div className="container welcome-button" style={style}>
        <Button waves='light' onClick={this.showWelcome.bind(this)}>Go to BurritoFinder Web</Button>
        </div>
        </CardPanel>
        </Col>
        </Row>
      </div>
    )
  }
}

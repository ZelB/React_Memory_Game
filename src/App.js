import React, { Component } from 'react'

// import useState
import { useState } from 'react';

//import react DOM for routing
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

//import custom CSS
import './customCSS.css'

//import components 
import Header from './Components/Header';
import Help from './Components/Help';
import Play from './Play'

class App extends Component {
  
  render() {

    return (
      <div className="appClass">
        <Header />

        <div >
          <Nav className="justify-content-end helpClass" activeKey="/home">
          
            <Nav.Item>
              <Nav.Link href="/help">HELP</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/play">PLAY</Nav.Link>
            </Nav.Item>

          </Nav>
        </div>

      <BrowserRouter>
        <Switch>
          <Route path="/play"> <Play /></Route>
          <Route path='/help'><Help /></Route>
        </Switch>
      </BrowserRouter>
      <br />
      
      </div>
    )
  }
}

export default App


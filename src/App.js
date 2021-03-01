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
import Login from './Components/Login';
import Help from './Components/Help';
import GameBoard from './Components/GameBoard';
import EndGame from './Components/EndGame';

class App extends Component {
  //Set the parent state of the login name and score. to be used by "Login" and "Gameboard" component
  state = {
    showLoginName: true,
    showEndGame: false,
    playerName: '',
    userScore: 0,
  };

  //Handle the login to et the player's name when they first log in
  handelLogin = (playerName, loggedIn) => {
    this.setState({playerName: playerName, showLoginName: loggedIn });
  };

  //update the user's score when the user finishes a game successfully 
  handelEndGame = (booleanEndGame) => {
    if (booleanEndGame) {
      this.setState({showEndGame: booleanEndGame, userScore: this.state.userScore + 1})
    } else {
      this.setState({showEndGame: booleanEndGame});
    }
  };

  render() {

    const{showLoginName, showEndGame, playerName, userScore} = this.state;

    return (
      <div className="appClass">
        <Header />

        <div >
          <Nav className="justify-content-end helpClass" activeKey="/home">
          
            <Nav.Item>
              <Nav.Link href="/help">HELP</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/">PLAY</Nav.Link>
            </Nav.Item>

          </Nav>
        </div>

      <BrowserRouter>
        <Switch>
          <Route exact path="/"></Route>
          <Route path='/help'><Help /></Route>
        </Switch>
      </BrowserRouter>
      <br />

      {showLoginName ? <Login playerName={this.handelLogin} /> : null}
      {showEndGame ? <EndGame newGame={this.handelEndGame} /> : null}
      <br />

      <GameBoard endGame={this.handelEndGame} playerName={this.state.playerName} userScore={this.state.userScore} />
        
      </div>
    )
  }
}

export default App


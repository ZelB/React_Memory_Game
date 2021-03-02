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

export class Play extends Component {
  // Parent state to be imported to both LOGIN and GAME component
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
            <div>
                {showLoginName ? <Login playerName={this.handelLogin} /> : null}
                {showEndGame ? <EndGame newGame={this.handelEndGame} /> : null}
                <GameBoard endGame={this.handelEndGame} playerName={this.state.playerName} userScore={this.state.userScore} />
                     
            </div>
        )
    }
}

export default Play

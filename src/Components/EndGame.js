import React, { Component } from 'react'

//import react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

export class EndGame extends Component {

    handleRestartBtn = () => {
        this.props.newGame(false);
    };
    
    render() {
        return (
            <div>
                <h3>Well Done! Would you like to give it another go?</h3>
                <Button 
                    variant="secondary" size="lg"
                    onClick={this.handleRestartBtn}>
                        Restart Game</Button>

            </div>
        )
    }
}

export default EndGame

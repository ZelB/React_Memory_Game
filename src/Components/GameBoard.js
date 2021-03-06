import React from 'react'

//import each Picture into the GameBoard platform
import Pictures from './Pictures';


const GameBoard = ({playerName, userScore, endGame}) => {
    
    return (
        <div className='gameBoxDiv'>

             <div>
                <h5>{playerName}</h5>
                <h6>Score: {userScore}</h6>
            </div>
            <br />

            <div>
                <Pictures endGame={endGame}/>
            </div>
           
        </div>
    )
}

export default GameBoard

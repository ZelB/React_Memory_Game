import React from 'react'

//import image 
import winkFace from './Images/winkFace.jpg';

const Help = () => {
    return (
        <div className="helpInstructClass">
            <h1>How to play the game:</h1>
            <br />

            <ol>
                <li>Click on the "Play" option in the menu tab</li>
                <li>Click on the card to turn the card around and display an image</li>
                <li>You can only turn two cards around at any one time</li>
                <li>Try and match up the identical cards</li>
                <li>Once you have matched all the identical cards, you <b><em>win</em></b></li>
            </ol>
            <br />

            <h4> Click on the "Play" option in the menu tab to start a new game</h4>
            <br />

            <h3><em>Good Luck! And may the odd be ever in your favour..... <img src={winkFace} alt="Wink Face" width="60px" /></em></h3>
            
        </div>
    )
}

export default Help

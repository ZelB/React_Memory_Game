import React, { Component } from 'react'

//import the images array 
import { imagesArray}  from './All_Images';


class Pictures extends Component {
    

    // create an array of image to store the 2x cards that the user chose
    chosenCards = [];

    //click event when the user clicks on the card
    handleCardClick = (e) => {
        let eachCard = e.target;
        //add a check boolean to know once a card has been flipped
        //once all the cards have been flipped (the attribute will all be found)
        if (eachCard.getAttribute('check') === "found") {
            return;
        }

        //if the chosen card is not equal to the previous chosen card, then push it into the array
        if (eachCard !== this.chosenCards[0]) {
            this.switchCard(eachCard);
            this.chosenCards.push(eachCard);
        } else {
            this.switchCard(eachCard);
            this.chosenCards = [];
        }

        // if the user already clicked twice on the card, shift for new selection
        if (this.chosenCards.length > 2) {
            if (!this.checkCard(this.chosenCards[0], this.chosenCards[1])) {
                this.switchCard(this.chosenCards[0]);
                this.switchCard(this.chosenCards[1]);
                this.chosenCards.shift();
                this.chosenCards.shift();
            } else {
                this.chosenCards.shift();
                this.chosenCards.shift();
            }
        }

        //Get all the images in the array based on the class name
        let allCards = document.getElementsByClassName('cardBack');

        //if there are no more images left to turn araound
        if (allCards.length < 1){
            this.props.endGame(true);
            let restartGame = document.getElementsByClassName('imgSizeBox');
            // reset the game by flippinf all the images so that the back shows
            for (let i = 0; i < restartGame.length; i++ ){
                restartGame[i].classList.add('cardBack');
                restartGame[i].setAttribute("check", "false");
                this.chosenCards = [];
            }
        }

    }

    //add a checkCard function to know once a card has been flipped
    checkCard = (card1, card2) => {
            if (card1.getAttribute('name') === card2.getAttribute('name')){
                //once the unique cards have been paired
                card1.setAttribute('check', 'found');
                card2.setAttribute('check', 'found');
                return true;
            }
            return false;
    };

     //switch displays the cards unique image
     switchCard = (target) => {
        if (target.getAttribute('check') === 'true') {
            target.setAttribute('check', 'false');
            target.classList.add('cardBack');
        } else {
            target.setAttribute('check', 'true');
            target.classList.remove('cardBack');
        }
     };


    render() {
         //Randomize the position the images are stored in using the 0.5 in the math.random function
        //create and array
        return (
            <div className="imageClass">
            {imagesArray.sort(() => Math.random() - 0.5).map((eachImage) => {
                return (
                    <div
                        className='imgSizeBox cardBack'
                        name={eachImage.name}
                        style={{background: `url(${eachImage.pic})`}}
                        check='false'
                        onClick={this.handleCardClick}
                    />
                    
                )
            })}
            
        </div>
        )
    }
}

export default Pictures

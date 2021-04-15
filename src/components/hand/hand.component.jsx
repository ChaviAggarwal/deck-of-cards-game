import React, { useState, useEffect } from 'react';
import './hand.styles.scss'



function Hand(props) {

    const [deckDetails, setDeckDetails] = useState([]);
   

    useEffect(() => {

        setDeckDetails(props.cardDetails);

    }, [props.cardDetails]);




    // /**
    //  * 
    //  * @param {event} e
    //  * used to assign index and sort cards. 
    //  */
    const sortCards = (e) => {

        console.log('hi');
        let deck = props.cardDetails;

        deck.forEach(element => {
            if (element.Suit == "Club") {
                element.suitIndex = 0;
            }
            if (element.Suit == "Spades") {
                element.suitIndex = 1;
            }
            if (element.Suit == "Heart") {
                element.suitIndex = 2;
            }
            if (element.Suit == "Diamonds") {
                element.suitIndex = 4;
            }
            if (element.Value == "Jack") {
                element.rankIndex = 11
            }
            else if (element.Value == "Queen") {
                element.rankIndex = 12
            }
            else if (element.Value == "King") {
                element.rankIndex = 13
            }
            else if (element.Value == "Ace") {
                element.rankIndex = 14
            }
            else {
                element.rankIndex = element.Value;
            }

        });

        deck.sort(function (a, b) {
            if (a.suitIndex < b.suitIndex ||
                (a.suitIndex == b.suitIndex && a.rankIndex < b.rankIndex)) {
                return -1;
            }
            return 1;
        });

        setDeckDetails([...deck]);
    }



    return (
        <div>
            <div className="hand-details">
            <h4>Hand</h4>
                <button type="text" className="sort-btn" onClick={(ev) => { sortCards(ev) }}>Sort Card</button>     
                {
                    <ul>
                        {deckDetails.map((card,index) => {
                            return <li key ={index} value={card.Value}>{card.Value} of {card.Suit}</li>
                        })}
                    </ul>
                }
            </div>
        </div>
    )
}

export default Hand;

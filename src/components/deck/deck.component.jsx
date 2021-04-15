import React, { useState, useEffect} from 'react';
import './deck.styles.scss'



function Deck(props) {

    const [deckDetails, setDeckDetails] = useState(props.deckdetails);

    useEffect(() => {



    }, [deckDetails]);

    /**
     * 
     * @param {event} e
     * used for show and hide the header details, when Card is collapse. 
     */
    const handleShuffleEvent = (e) => {
       let deckValues=deckDetails;
       setDeckDetails([]);
    //    deckValues.forEach(function(card,i) {
    //     let j = Math.floor(Math.random() * i);
    //     let temp = card[i];
    //     card[i] = card[j];
    //     card[j] = temp;
    //    });
        for (let i = deckValues.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = deckValues[i];
            deckValues[i] = deckValues[j];
            deckValues[j] = temp;
        };
        setDeckDetails([...deckValues]);
    }

    // const isOpen = props.details.offerId === props.activeCardId;

    return (
        <div className="deck-container">
            <h4>Deck</h4>
            <div className="cart-details">
            <button type="text" className="shuffle-btn" onClick={(ev) => { handleShuffleEvent(ev) }}>Shuffle</button>
                {
                   
                    <ul>
                        
                        {deckDetails.map((card,index) => {
                            return <li value={card.Value}key={index}>{card.Value} of {card.Suit}</li>
                        })}
                    </ul>
                }
            </div>
        </div>
    )
}

export default Deck;

import React, { useState, useEffect } from 'react';
import Hand from '../hand/hand.component';
import './draw.styles.scss'




function Draw(props) {

    const [selectedCardVal, setSelectedCardNum] = useState('');
    const [selectedSuit, setSelectedSuit] = useState('');
    const [selectedCard, setSelectedCard] = useState([]);

    useEffect(() => {



    }, []);


    const handleChangeCardVal = (ev, val) => {
        setSelectedCardNum(val);

    }
    const handleChangeSuit = (val) => {

        setSelectedSuit(val);
    }


    /**
     * 
     * @param {event} e
     * used for show and hide the header details, when Card is collapse. 
     */
    const handleDrawEvent = (e) => {

        let deck = [...selectedCard];
        let card = { Value: selectedCardVal, Suit: selectedSuit }
        let found = false;
        deck.forEach(element => {
            if (element.Value == card.Value && element.Suit == selectedSuit) {
                found = true;
                return;
            }
            else {
                found = false;
            }

        });
        if ((deck.length == 0 || found == false) && (selectedCardVal !== '' && selectedSuit !== '')) {
            deck.push(card);
        }

        setSelectedCard([...deck]);

    }

    // const isOpen = props.details.offerId === props.activeCardId;

    return (
        <div>
            <div className="card-details">
                <h4>Controls</h4>
                <div className="draw-container">
                    <div>
                        <div className="dropdown-container">

                            <div className="drpdwn-container">
                                <label >Select Card</label>
                                <div className="custom-dropdown"> <select value={selectedCardVal || ''} onChange={(ev) => { handleChangeCardVal(ev, ev.target.value) }}>
                                    <option value=''></option>
                                    {/* <li onMouseDown={handleDefaultAccount} className={selectedAccount === '' ? "option custom-account-option active" : "option custom-account-option"}> Select account </li> */}
                                    {props.cardVal.map((card) => {
                                        return <option

                                            value={card}
                                            key={card}
                                        >{card}</option>
                                    })}
                                </select>
                                </div>
                            </div>

                            <div className="drpdwn-container">
                                <label >Select Suit</label>
                                <div className="custom-dropdown"> <select
                                    onChange={(ev) => { handleChangeSuit(ev.target.value) }}
                                >
                                    <option value=''></option>
                                    {props.suits.map((suit) => {
                                        return <option

                                            value={suit}
                                            key={suit}
                                        >{suit}</option>
                                    })}
                                </select>
                                </div>

                            </div>


                        </div>
                        <button type="text" className="draw-btn" onClick={(ev) => { handleDrawEvent(ev) }}>Draw Card</button>
                    </div>
                    <div>
                        <Hand cardDetails={selectedCard}></Hand>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Draw;

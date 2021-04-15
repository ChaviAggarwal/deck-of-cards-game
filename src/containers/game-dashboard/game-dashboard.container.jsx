import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Deck from '../../components/deck/deck.component';
import Draw from '../../components/draw-card/draw.component'
import './game-dashboard.container.scss'



function Dashboard(props) {

  const [cardValues, setCardValues] = useState([2, 3, 4, 5, 6, 7,
    8, 9, 10, "Jack", "Queen", "King", "Ace"]);

  const [suits, setSuits] = useState(["Spades", "Diamonds", "Club", "Heart"]);

  let deck = [];

  //create a deck of cards
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < cardValues.length; x++) {
      let card = { Value: cardValues[x], Suit: suits[i] };
      deck.push(card);
    }
  }


  return (
    <div>
      <h3 className="header">iX Cards Test</h3>
      <div className="dashboard">
      <Deck deckdetails={deck} ></Deck>
      <Draw cardVal={cardValues} suits={suits} ></Draw>
      </div>
    </div>
  );
}




export default Dashboard;


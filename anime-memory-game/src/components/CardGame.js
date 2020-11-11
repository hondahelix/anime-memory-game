import Header from "./Header";
import Navbar from "./Navbar";
import Cards from "./Cards";
import React, { Component } from "react";
import CardInfo from "./cards.json";
class CardGame extends Component {
    state = {
      highScore: "",
      score: "",
      updateUser: "Click an Image to Begin!",
      cardData: CardInfo
    };

    render(){
        return(
            <div>
                <Navbar score={this.state.score} topScore={this.state.highScore} updateUser = {this.state.updateUser}/>
                <Header />
                <Cards cardData = {this.state.cardData}/>
            </div>
        );
    }
}

export default CardGame;
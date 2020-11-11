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
      cardData: CardInfo,
      clicked: []
    };
    shuffleCards = function(){
        this.state.cardData.sort(() => Math.random() - 0.5);
    }
    handleClick = event => {
        event.preventDefault();
        var clickedId = event.target.id;
        console.log(event.target.id);
        if(this.state.clicked.includes(clickedId)){
            // change to wrong for update user and restart also shuffle cards
            this.setState({updateUser: "You guessed incorrectly!"});
        }
        else{
            this.state.clicked.push(clickedId);
            this.setState({updateUser: "You guessed correctly!"});
            this.shuffleCards();
        }

        //console.log(this.state.clicked);

      };
    render(){
        return(
            <div>
                <Navbar score={this.state.score} topScore={this.state.highScore} updateUser = {this.state.updateUser}/>
                <Header />
                <Cards cardData = {this.state.cardData} handleClick = {this.handleClick}/>
            </div>
        );
    }
}

export default CardGame;
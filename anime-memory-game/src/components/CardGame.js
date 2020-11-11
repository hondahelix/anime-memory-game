import Header from "./Header";
import Navbar from "./Navbar";
import Cards from "./Cards";
import React, { Component } from "react";
import CardInfo from "./cards.json";
class CardGame extends Component {
    state = {
      highScore: 0,
      score: 0,
      updateUser: "Click an Image to Begin!",
      cardData: CardInfo,
      clicked: []
    };
    setScores = function(){
        if(this.state.score>=this.state.highScore){
            this.setState({highScore: this.state.score+1});
        }
        this.setState({score: this.state.clicked.length});
    }
    shuffleCards = function(){
        this.state.cardData.sort(() => Math.random() - 0.5);
    }
    handleClick = event => {
        event.preventDefault();
        var clickedId = event.target.id;
        //console.log(event.target.id);
        if(this.state.clicked.includes(clickedId)){
            // change to wrong for update user and restart also shuffle cards
            this.setState({updateUser: "You guessed incorrectly!"});
            //need to reset the count but keep the high score
        }
        else{
            this.state.clicked.push(clickedId);
            //console.log(this.state.clicked);
            this.setState({updateUser: "You guessed correctly!"});
            this.shuffleCards();
            this.setScores();
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
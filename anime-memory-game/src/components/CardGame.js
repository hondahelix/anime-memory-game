import Header from "./Header";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";
import React, { Component } from "react";
import CardInfo from "./cards.json";

class CardGame extends Component {
    state = {
      highScore: 0,
      score: 0,
      updateUser: "Click an Image to Begin!",
      cardData: CardInfo,
      clicked: [],
      gameLost: false
    };
    resetGame = function(){
        this.setState({score: 0});
        this.setState({updateUser: "Click an Image to Begin!"});
        this.setState({clicked: []});
        this.setState({gameLost: false});
    }
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
        if(this.state.gameLost === true){
            this.resetGame();
        }
        else if(this.state.clicked.includes(clickedId)){
            this.setState({updateUser: "You guessed incorrectly!"});
            this.setState({gameLost: true});
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
            <div style={{backgroundColor: "gray"}}>
                <Navbar score={this.state.score} topScore={this.state.highScore} updateUser = {this.state.updateUser}/>
                <Header />
                <Cards cardData = {this.state.cardData} handleClick = {this.handleClick}/>
                <Footer/>
            </div>
        );
    }
}

export default CardGame;
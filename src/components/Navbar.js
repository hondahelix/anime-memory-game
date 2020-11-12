import React from "react";

function Navabar(props){
    return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
        <span className="navbar-brand mb-0 h1">Anime Memory Game</span>
        <li style={{color: "white", listStyleType: "none" }} >{props.updateUser}</li>
        <li style={{color: "white", listStyleType: "none"}} >Score: {props.score} | Top Score: {props.topScore}</li> 
    </nav>
    );
};

export default Navabar;


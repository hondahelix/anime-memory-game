

function Navabar(props){
    return (
    <nav className="navbar navbar-light bg-light fixed-top">
        <span className="navbar-brand mb-0 h1">Anime Memory Game</span>
        <li>{props.updateUser}</li>
        <li>Score: {props.score} | Top Score: {props.topScore}</li> 
    </nav>
    );
};

export default Navabar;


//style="width: 18rem;"
function Cards(props){
    return(
        <div className = "container">
            <div className="row row-cols-4">
                { props.cardData.map( card =>
                <div key={card.id} className="card" style={{ width: '10rem' }}>
                    <img  src={card.image} className="card-img-top" alt={card.name}/>
                </div>)}
            </div>
            <br></br>
            <br></br>
        </div>
    );
}




export default Cards;
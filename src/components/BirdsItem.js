import React from "react";

function BirdsItem({image, name, canFly}){
    const message = () => {
    alert('Go to Google for more information!');
        };
    return(
        <div className="card">
            <img src={image} alt={BirdsItem.name}/>
            <h3>{name}</h3>
            <p>{canFly}</p>
            <button onClick={message}>See more</button>
        </div>
    )
}

export default BirdsItem;
import React from "react";

function MammalsItem({image, name, nb}){
    const message = () => {
    alert('Go to Google for more information!');
        };
    return(
        <div className="card">
            <img src={image}/>
            <h3>{name}</h3>
            <p>Number of legs:{nb}</p>
            <button onClick={message}>See more</button>
        </div>
    )
}

export default MammalsItem;
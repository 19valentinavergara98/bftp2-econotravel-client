import React from 'react';


function Card(props){

    return(
        <div className="card-container">
            <h2 className="experience-name">
                {props.experience.name}
            </h2>
            <p className="card-price">
                {props.experience.price}
            </p>
            <p className="card-duration">
                {props.experience.duration}
            </p>
            <p className="card-tag">
                {props.experience.tag}
            </p>


            <button>Saber más</button>

        </div>
    );
}
export default Card;
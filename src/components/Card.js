import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "./Card.css";


function Card(props){

    return(
        <div className="card-container">
            <div className="card">
                <img className="card-image" src="https://files.slack.com/files-pri/T02GLB0PY4U-F030WMYV24B/screenshot_2022-01-31_at_12-09-18_econotravel_-_experiencias.png"/>

            <h2 className="experience-name">
                {props.experience.name}
            </h2>
            <p className="card-price">
                {props.experience.price}€
            </p>
            <p className="card-duration">
                {props.experience.duration}
            </p>
            <p className="card-tag">
                {props.experience.tag}
            </p>


            <Button variant="success">Saber más</Button>
            </div>
        </div>
    );
}
export default Card;
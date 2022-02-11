import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

import "./Card.css";


function Card(props) {

    return (
        <div className="card-container">
            <div className="img-container">
                {props.experience.image}
            </div>

            <div className="card">

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
                <div className="action-buttons">
                    <Button variant="success">Saber más</Button>

                </div>
                <div className="admin-buttons">
                    <Button variant="secondary">Edit</Button>
                    <Button variant="danger">Delete</Button>

                </div>

            </div>
        </div>
    );
}

export default Card;
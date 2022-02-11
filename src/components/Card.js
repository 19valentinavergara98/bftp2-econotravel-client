import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import tibidabo from "./assets/tibidabo.jpeg"

import "./Card.css";



function Card(props) {

    return (
        <div className="card-container">
            <div className="card">

                <div className="container2">
                    <div className="card1">
                        <figure class name="card-thumb">

                            <div className="card-img">
                                {props.experience.coverImage}
                                <img src={tibidabo} className="tibidabo"alt="Picture by Kyle Cottrell"></img>
                                <h2 className="experience-name">
                                    {props.experience.name}
                                </h2>
                            </div>
                        </figure>
                    </div>
                </div>
                <div className="parametros">
                    <p className="card-description">
                        {props.experience.description}
                    </p>
                    <p className="card-price">
                        {props.experience.price}€
                    </p>
                    <p className="card-duration">
                        {props.experience.duration}
                    </p>
                    <p className="card-tag">
                        {props.experience.tag}
                    </p>
                </div>
                    <div className="action-buttons">
                        <Button variant="success">Saber más</Button>

                    </div>
                    <div className="admin-buttons">
                        <Button variant="secondary">Edit</Button>
                        <Button variant="danger">Delete</Button>

                    </div>

            </div>
        </div>

    )
}

export default Card;
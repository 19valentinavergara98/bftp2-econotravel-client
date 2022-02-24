import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import "./Edit";
import "./Card.css";
import {Link} from "react-router-dom"


function Card(props) {
    const [show, setShow] = useState(false);
    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const deleteExperience = (id) => {
        fetch(`http://localhost:8080/api/experiences/delete/${id}`,
            {
                method: 'DELETE',
                mode:  'cors'
            }
        ).then(_ => setRequiresUpdate(true))

    }
    return (
        <div className="card-container">
            <div className="card">

                <div className="container2">
                    <div className="card1">

                        <img className="img-card" src={props.experience.coverImage}/>

                        <a href="" className="news-card__card-link"/>
                        <div className="text-wrapper">
                            <h2 className="experience-name">
                                {props.experience.name}
                            </h2>

                            <div className="details-wrapper">
                                <Link className="read-more" role="button" to="edit">Edit</Link>

                                <button onClick={() => deleteExperience(props.experience.id)}
                                        className="read-more">Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resume">
                    {props.experience.resume}

                </div>

                {show ? <div className="parametros">
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
                    <Link className="btn btn-success btn-lg" role="button" to="reservar">Reservar</Link>
                </div> : null}
                <div className="action-buttons">
                    <Button className="saber-mas" variant="success" onClick={() => setShow(!show)}>Saber más</Button>

                </div>


            </div>
        </div>

    )
}

export default Card;
import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import add from "./assets/add.png";
import "./Add.css"


function Add(props) {

    const [show, setShow] = useState(false);

    let navigate = useNavigate();

    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [newExperience, setNewExperience] = useState({});






    const handleInputChange = (event) => {
        setNewExperience({
            ...newExperience,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        props.addExperience(newExperience)
            .then(() => navigate("experiencias"))
    }


    return (
        <div className="add-form">

            <img src={add} className="imageAdd" title="añadir experiencia" onClick={() => setShow(!show)}/>

            {show ?<div className="newExperienceForm">
                <form className="edit-form" onSubmit={enviarDatos} action="">
                    <label> Titulo de la experiencia
                        <input
                            type="text"
                            name="title"
                            onChange={handleInputChange}
                            value={props.experience.name}
                        />
                    </label>
                    <label> Resumen descripción experiencia
                        <input
                            type="text"
                            name="resume"
                            onChange={handleInputChange}/>
                    </label>
                    <label> Descripción experiencia
                        <input
                            type="text"
                            name="description"
                            onChange={handleInputChange}/>
                    </label>
                    <label> Precio de la experiencia
                        <input
                            type="text"
                            name="price"
                            onChange={handleInputChange}/>
                    </label>
                    <label> Duración de la experiencia
                        <input
                            type="text"
                            name="duration"
                            onChange={handleInputChange}/>
                    </label>
                    <label> Etiquetas
                        <input
                            type="text"
                            name="tag"
                            onChange={handleInputChange}/>
                    </label>
                    <button type="submit" >Add experience</button>
                </form>
            </div>: null}

        </div>
    );
}


export default Add;
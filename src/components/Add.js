import React, {useState} from 'react';
import Footer from "./Footer";
import {useLocation, useNavigate} from "react-router-dom";


function Add(props) {
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
            .then(() => navigate("/"))
    }


    return (
        <div className="add-form">
            <div className="newExperienceForm">
                <form className="edit-form" onSubmit={enviarDatos} action="">
                    <label> Titulo de la experiencia
                        <input
                            type="text"
                            name="title"
                            onChange={handleInputChange}/>
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
            </div>

        </div>
    );
}


export default Add;
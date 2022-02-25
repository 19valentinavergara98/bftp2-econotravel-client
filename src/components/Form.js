import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import add from "./assets/add.png";
import "./Form.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Form(props) {

    const [show, setShow] = useState(false);

    let navigate = useNavigate();

    const [requiresUpdate, setRequiresUpdate] = useState(true);


    const location = useLocation();
    const data = location.state ? location.state.data : null;
    const [datos, setDatos] = useState(data || {
        name: '',
        resume: '',
        description:'',
        price:null,
        duration: '',
        tag: '',
        coverImage: ''
    })


    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        props.addExperience(datos)
            .then(() => navigate("/"))
    }


    return (
        <div className="add-form" id="form">

            <img src={add} className="imageAdd" title="añadir experiencia" onClick={() => setShow(!show)}/>

            {show?<div className="add">
                <div className="newExperienceForm">
                    <h1>{data ? 'Editar experiencia' : 'Nueva experiencia'}</h1>
                <form className="edit-form" onSubmit={enviarDatos} action="">
                    <label> Inserta imagen de la experiencia
                        <input
                            type="url"
                            name="coverImage"
                            onChange={handleInputChange}
                            value={datos.coverImage}
                        />
                    </label>
                    <label> Titulo de la experiencia
                        <input
                            className="experience-form"
                            type="text"
                            name="name"
                            onChange={handleInputChange}
                            value={datos.name}
                        />
                    </label>
                    <label> Resumen descripción experiencia
                        <input
                            className="experience-form"
                            type="text"
                            name="resume"
                            onChange={handleInputChange}
                            value={datos.resume}/>
                    </label>
                    <label> Descripción experiencia
                        <textarea value={datos.description}
                            className="experience-form"
                            type="text"
                            name="description"
                            onChange={handleInputChange}/>
                    </label>
                    <label> Precio de la experiencia
                        <input
                            className="experience-form"
                            type="text"
                            name="price"
                            onChange={handleInputChange}
                            value={datos.price}
                        />
                    </label>
                    <label> Duración de la experiencia
                        <input
                            className="experience-form"
                            type="text"
                            name="duration"
                            onChange={handleInputChange}
                            value={datos.duration}
                        />
                    </label>
                    <label> Etiquetas
                        <input
                            className="experience-form"
                            type="text"
                            name="tag"
                            onChange={handleInputChange}
                            value={datos.tag}
                        />
                    </label>
                    <button className="btn btn-success btn-lg" type="submit" >Guardar</button>
                </form>
                </div>
            </div>: null}

        </div>
    );
}


export default Form;
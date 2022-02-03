import './App.css';
import {useEffect, useState} from "react";


function App() {

    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState("");
    const [requiresUpdate, setRequiresUpdate] = useState(true);


    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const addExperience = (experienceName) => {
        fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: experienceName})
            }
        ).then(_ => setRequiresUpdate(true))

    }


    return (
        <div className="App">
            <div className="paginaInicio">
                <div clasName="NavBar">
                    <ul>
                        <li>logo</li>
                        <li>QUIÉNES SOMOS</li>
                        <li>EXPERIENCIAS</li>
                        <li>CONTACTO</li>
                    </ul>
                </div>
            </div>
                <div className="button-inicio">
                    <h1>¡ VIVE UNA EXPERIENCIA INOLVIDABLE !</h1>
                    <button>DESCÚBRELAS AQUÍ</button>
                </div>

        <div className="Quienes-somos">
            <p>ECONOTRAVEL promociona y diseña experiencias y actividades en Cataluña, fomentando un turismo responsable con la economía local, sostenible con el medio ambiente y ayudando a pequeños negocios de proximidad, fundaciones, asociaciones y proyectos locales a posicionarse en el sector turístico.</p>
            <button>Quiénes somos</button>

        </div>

            <div classExperiencias="Experiencias">
             <p>Nuestras experiencias han sido cuidadosamente seleccionadas para que puedas contribuir al desarrollo de la economía local y a la conservación del medio ambiente, siguiendo las pautas establecidas en el marco del turismo responsable y sostenible.</p>
                <p>Tarjetas de cada excursión y fotografía correspondiente</p>
                <button>Saber más</button>
            </div>

            <div class="Formulario">
            <p>Aquí crearemos un formulario para el cliente</p>
            </div>


            {/*<div className="newExperienceForm">
                <input onChange={e => setNewExperience(e.target.value)} type="text"/>
                <button onClick={() => addExperience(newExperience)}>Add experience</button>
            </div>


            <ul>
                {experiences.map(experience => <li>{experience.name}</li>)}
            </ul>
            */

        </div>


    );
}

export default App;
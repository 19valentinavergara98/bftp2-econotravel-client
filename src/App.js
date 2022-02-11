import React from "react";
import './App.css';
import {useEffect, useState} from "react";
import Inicio from './components/Inicio';
import QuienesSomos from "./components/QuienesSomos";
import Experiencias from "./components/Experiencias";
import Formulario from "./components/Formulario";

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

    const addExperience = (experienceName, experienceDescription, experiencePrice, experienceDuration, experienceTag, experienceCoverImage) => {
        fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: experienceName,
                    description: experienceDescription,
                    price: experiencePrice,
                    duration: experienceDuration,
                    tag: experienceTag,
                    coverImage: experienceCoverImage
                })
            }
        ).then(_ => setRequiresUpdate(true))

    }



    return (
        <div className="App">

            <Inicio/>
            <QuienesSomos/>
            <Experiencias experiencias={experiences}/>


            <div class="Formulario">

                <Formulario name="Javi" otraCosa="hola"/>
            </div>


        </div>


    );
}

export default App;
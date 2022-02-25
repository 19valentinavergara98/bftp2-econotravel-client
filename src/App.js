import React from "react";
import './App.css';
import {useEffect, useState} from "react";
import Inicio from './components/Inicio';
import QuienesSomos from "./components/QuienesSomos";
import Experiencias from "./components/Experiencias";
import Formulario from "./components/Reservas";
import Footer from "./components/Footer";
import Reservas from "./components/Reservas";
import Add from "./components/Add";



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

    const addExperience = (experience) => {
        return fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(experience)
            }
        ).then(_ => setRequiresUpdate(true))

    }
    const deleteExperience = (id) => {
        fetch(`http://localhost:8080/api/experiences/delete/${id}`,
            {
                method: 'DELETE',
                mode:  'cors'
            }
        ).then(_ => setRequiresUpdate(true))

    }



    return (
        <div className="App">

            <Inicio/>
            <QuienesSomos/>
            <Experiencias experiences={experiences}/>
            <Add addExperience={addExperience}/>
            <div className="Reservas">

                <Reservas name="Javi" otraCosa="hola"/>

            </div>
            <Footer/>

        </div>


    );
}

export default App;
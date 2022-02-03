import './App.css';
import {useEffect, useState} from "react";
import ExperienceList from "./components/ExperienceList";

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
                        <img></img>
                        <li>QUIÉNES SOMOS</li>
                        <li>EXPERIENCIAS</li>
                        <li>CONTACTO</li>
                    </ul>
                </div>
                <button onclick="window.location.href=./components/Experience">DESCùBRELAS AQUÍ</button>
                <div>
            <div className="newExperienceForm">
                <input onChange={e => setNewExperience(e.target.value)} type="text"/>
                <button onClick={() => addExperience(newExperience)}>Add experience</button>
            </div>
            <div className="experiences" >

                <Experience />

            </div>

            <ul>
                {experiences.map(experience => <li>{experience.name}</li>)}
            </ul>
        </div>
    );
}

export default App;
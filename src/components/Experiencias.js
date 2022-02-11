import React from 'react';
import Card from "./Card";
import "./Experiencias.css"

function Experiencias(props) {
    return (<div className="experiences">
                <div className="parrafo">
                    <p>Nuestras experiencias han sido cuidadosamente seleccionadas para que puedas contribuir al desarrollo de
                    la economía local y a la conservación del medio ambiente, siguiendo las pautas establecidas en el marco
                    del turismo responsable y sostenible....</p>
                </div>
                {props.experiencias.map(experience => <Card experience={experience}/>)}
        </div>
    );
}

export default Experiencias;

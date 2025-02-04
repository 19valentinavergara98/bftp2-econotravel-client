import React, {useState} from 'react';
import Card from "./Card";
import "./Experiencias.css"



function Experiencias(props) {

    return (
        <div className="experiences" id="experiencias">
            <div className="parrafo">
                <p> Nuestras experiencias han sido cuidadosamente seleccionadas para que puedas contribuir al desarrollo
                    de la economía local y a la conservación del medio ambiente, siguiendo las pautas establecidas en el
                    marco del turismo responsable y sostenible....
                </p>
            </div>

            <div className="experiences-body">
                {props.experiences.map(experience => <Card experience={experience}
                                                           key={experience.id}
                                                           onDeleteExperience={props.onDeleteExperience} />)  }
            </div>



        </div>
    );
}

export default Experiencias;

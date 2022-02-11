import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import "./QuienesSomos.css"

function QuienesSomos(props){
    return(
        <div className="quienes-somos" id="quienessomos">
            <p>"ECONOTRAVEL promociona y diseña experiencias y actividades en Cataluña, fomentando un turismo responsable con la economía local, sostenible con el medio ambiente y ayudando a pequeños negocios de proximidad, fundaciones, asociaciones y proyectos locales a posicionarse en el sector turístico."</p>
           <div className= "button-somos">
                <Button variant="success" size="lg">Quiénes somos</Button>
            </div>
        </div>
    );
}
export default QuienesSomos;
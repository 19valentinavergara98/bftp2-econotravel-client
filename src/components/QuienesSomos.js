import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./QuienesSomos.css"
import {Link} from "react-router-dom";

function QuienesSomos(props){
    return(
        <div className="quienes-somos" id="quienessomos">
            <p>"ECONOTRAVEL promociona y diseña experiencias y actividades en Cataluña, fomentando un turismo responsable con la economía local, sostenible con el medio ambiente y ayudando a pequeños negocios de proximidad, fundaciones, asociaciones y proyectos locales a posicionarse en el sector turístico."</p>
           <div className= "button-somos">
                <Link  className="btn btn-success btn-lg" role="button" to="quienes-somos">Quiénes somos</Link>
            </div>
        </div>
    );
}
export default QuienesSomos;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function QuienesSomos(props){
    return(
        <div className="quienes-somos">
            <p>ECONOTRAVEL promociona y diseña experiencias y actividades en Cataluña, fomentando un turismo responsable con la economía local, sostenible con el medio ambiente y ayudando a pequeños negocios de proximidad, fundaciones, asociaciones y proyectos locales a posicionarse en el sector turístico.</p>
            <Button variant="success">Quiénes somos</Button>
        </div>
    );
}
export default QuienesSomos;
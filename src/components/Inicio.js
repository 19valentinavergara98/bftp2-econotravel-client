import React from 'react';
import './Inicio.css';
import tibidabo from "./assets/tibidabo.jpeg"


function Inicio(props){
    return(
        <div className="inicio-eco">
            <ul>
                <li>logo</li>
                <li>QUIÉNES SOMOS</li>
                <li>EXPERIENCIAS</li>
                <li>CONTACTO</li>
            </ul>
            <img src={tibidabo} className="imgTibidabo"></img>
            <h1>¡ VIVE UNA EXPERIENCIA INOLVIDABLE !</h1>
            <div className="actions">
                <button>DESCÚBRELAS AQUÍ</button>
            </div>
        </div>
    );
}
export default Inicio;
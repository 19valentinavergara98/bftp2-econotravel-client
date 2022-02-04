import React from 'react';
import Navbar from "./Navbar";
import './Inicio.css';
import tibidabo from "./assets/tibidabo.jpeg"


function Inicio(props){
    return(
        <div className="inicio-eco">
            <Navbar />
            <img src={tibidabo}></img>
            <h1>¡ VIVE UNA EXPERIENCIA INOLVIDABLE !</h1>
            <div className="actions">
                <button>DESCÚBRELAS AQUÍ</button>
            </div>
        </div>
    );
}
export default Inicio;
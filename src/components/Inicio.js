import React from 'react';
import Navbar from "./Navbar";


function Inicio(props){
    return(
        <div className="inicio-eco">
            <Navbar />
            <h1>¡ VIVE UNA EXPERIENCIA INOLVIDABLE !</h1>
            <div className="actions">
                <button>DESCÚBRELAS AQUÍ</button>
            </div>
        </div>
    );
}
export default Inicio;
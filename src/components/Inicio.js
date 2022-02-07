import React from 'react';
import Navbar from "./Navbar";
import './Inicio.css';
import tibidabo from "./assets/tibidabo.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


function Inicio(props){
    return(
        <div className="inicio-eco">
            <Navbar />
            <img src={tibidabo}></img>
            <h1>¡ VIVE UNA EXPERIENCIA INOLVIDABLE !</h1>
            <div className="actions">
                <Button variant="success">DESCÚBRELAS AQUÍ</Button>
            </div>
        </div>
    );
}
export default Inicio;
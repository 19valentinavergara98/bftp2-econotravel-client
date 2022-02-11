import React from 'react';
import './Inicio.css';
import tibidabo from "./assets/tibidabo.jpeg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import logo from "./assets/logo.png"
import { Link, animateScroll as scroll } from "react-scroll";


function Inicio(props){
    return(
        <div className="inicio-eco">

            <div className= "nabvar">
                <img src={logo} className="imageLogo"></img>
            <ul>
                <li>
                    <Link to="quienessomos">QUIÉNES SOMOS </Link>
                    </li>
                <li>EXPERIENCIAS</li>
                <li>CONTACTO</li>
            </ul>
            </div>
            <img src={tibidabo} className="imgTibidabo"></img>
            <div className= "container">
                <h1>¡ VIVE UNA EXPERIENCIA INOLVIDABLE !</h1>
            </div>
                <div className="button">
                    <Button variant="success">DESCÚBRELAS AQUÍ</Button>
                </div>

        </div>
    );
}
export default Inicio;
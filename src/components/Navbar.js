import React from 'react';
import {Link} from "react-router-dom";
import logo from "./assets/logo.png";


function Navbar(props){
    return (
        <div className="navbar-2">
            <div className="secondary-navbar">
                <Link to="/">
                    <img src={logo} className="imageLogo"></img>
                </Link>
                <ul>
                    <li>
                        <Link to="/">QUIÉNES SOMOS </Link>
                    </li>
                    <li>
                        <Link to="/">EXPERIENCIAS</Link>
                    </li>
                    <li>CONTACTO</li>
                </ul>
            </div>
        </div>
    );
}



export default Navbar;

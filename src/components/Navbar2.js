import React from "react";
import "./Navbar2.css"
import logo from "./assets/logo.png";
import {Link} from "react-router-dom";

function Navbar2() {
    return (
        <div className="nav2">
            <nav id="nav-3">
                <img src={logo} className="img-nav2"></img>
                <a className="link-3"><Link to="/">HOME</Link></a>
                <a className="link-3" ><Link to="/">EXPERIENCIAS</Link></a>
                <a className="link-3" ><Link to="/">CONTACTO</Link></a>
            </nav>
        </div>
    );
}

export default Navbar2;
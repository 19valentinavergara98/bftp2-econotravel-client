import React from "react";
import "./Navbar2.css"
import logo from "./assets/logo.png";
import {Link} from "react-router-dom";

function Navbar2() {
    return (
        <div className="nav2">
            <nav id="nav-3">
                <img src={logo} className="img-nav2"/>
                 <Link className="link-3" to="/">HOME</Link>
                 <Link className="link-3"to="/">EXPERIENCIAS</Link>
                 <Link className="link-3" to="/">CONTACTO</Link>
            </nav>
        </div>
    );
}

export default Navbar2;
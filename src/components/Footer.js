import React from 'react';
import {Link} from "react-router-dom";
import sociallogo from "./assets/sociallogo.png";
import "./Footer.css"


function Footer(props) {
    return (

        <div className="footer-section">
            <p className="info-footer">© Econotravel  /   www.econotravel.com  </p>
                <img src={sociallogo} className="social-logo"></img>
        </div>
    );
}

export default Footer;
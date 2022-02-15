import React from 'react';
import sociallogo from "./assets/sociallogo.png";
import "./Footer.css"


function Footer(props) {
    return (

        <div className="footer-section">
            <p className="info-footer">© Econotravel  /   www.econotravel.com  </p>
            <p className="info-footer1">Teléfono: 93 123 45 67 <br/> Correo: info@econotravel.com <br/>Dirección: Carrer dels Viatgers, 28, 08001 Barcelona</p>
                <img src={sociallogo} className="social-logo"></img>
        </div>
    );
}

export default Footer;
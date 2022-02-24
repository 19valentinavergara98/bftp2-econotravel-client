import React from 'react';
import quienessomos from "./assets/quienessomos.jpg"
import "./QuienesSomosInfo.css";
import Footer from "./Footer";



function QuienesSomosInfo(props){
    return(

        <div className="info">


            <div className="mision-img">
                <div className="info-parrafo">
                    <h1>Misión</h1>
                    <p>
                    Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en
                    bicicleta por Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones
                    turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes
                    contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un
                    progresivo deterioro de los increíbles parajes naturales de Cataluña.

                    Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de
                    experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació
                    Econotravel
                </p>



                </div>
                <div className="img-container">
                    <img src={quienessomos} className="img-quienes-somos"
                         alt="Marina Herrán, fundadora de Econotravel"/>
                    <p className="Marina">Marina Herrán, fundadora de Econotravel</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default QuienesSomosInfo;
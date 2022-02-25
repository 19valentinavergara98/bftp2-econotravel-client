import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import QuienesSomosInfo from "./components/QuienesSomosInfo";
import QuienesSomos from "./components/QuienesSomos";
import Inicio from "./components/Inicio";
import Experiencias from "./components/Experiencias";
<<<<<<< HEAD
import Reservas from "./components/Reservas";
=======
<<<<<<< HEAD


import Form from "./components/Form";
import Edit from "./components/Edit";

import Reservas from "./components/Reservas";

=======
>>>>>>> 8825614c7e35e2a488653a80ad136e52051b4ea8
import Form from "./components/Form";
import Edit from "./components/Edit";
import Edit from "./components/Edit";
import Reservas from "./components/Reservas";
<<<<<<< HEAD

=======
>>>>>>> 357078a2e792b489b1655e4d9ec8b867f0c9c7c5
>>>>>>> 8825614c7e35e2a488653a80ad136e52051b4ea8
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/" element={<Inicio/>}/>
              <Route path="/" element={<QuienesSomos/>}/>
              <Route path="quienes-somos" element={<QuienesSomosInfo/>}/>


   <Route path="/" element={<Experiencias/>}/>

              <Route path="edit" element={<Form/>}/>
              <Route path="/" element={<Experiencias/>}/>
              <Route path="edit" element={<Form/>}/>
              <Route path="edit" element={<Edit/>}/>
              <Route path="/" element={<Reservas/>}/>
<<<<<<< HEAD


=======
<<<<<<< HEAD

=======
>>>>>>> 357078a2e792b489b1655e4d9ec8b867f0c9c7c5
>>>>>>> 8825614c7e35e2a488653a80ad136e52051b4ea8
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

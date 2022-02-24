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
import Edit from "./components/Edit";
import Reservas from "./components/Reservas";
import Add from "./components/Add";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/" element={<Inicio/>}/>
              <Route path="/" element={<QuienesSomos/>}/>
              <Route path="quienes-somos" element={<QuienesSomosInfo/>}/>
              <Route path="/" element={<Experiencias/>}/>D
              <Route path="edit" element={<Edit/>}/>
              <Route path="/" element={<Experiencias/>}/>
              <Route path="edit" element={<Edit/>}/>
              <Route path="add-experience" element={<Add/>}/>
              <Route path="reservas" element={<Reservas/>}/>


          </Routes>

      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

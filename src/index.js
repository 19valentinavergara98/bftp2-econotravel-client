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


=======
>>>>>>> a3b46dafe6d42585d9b796a6c8579280bea5283d
import Form from "./components/Form";
import Edit from "./components/Edit";
<<<<<<< HEAD


=======
import Reservas from "./components/Reservas";
>>>>>>> a3b46dafe6d42585d9b796a6c8579280bea5283d
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/" element={<Inicio/>}/>
              <Route path="/" element={<QuienesSomos/>}/>
              <Route path="quienes-somos" element={<QuienesSomosInfo/>}/>
<<<<<<< HEAD

   <Route path="/" element={<Experiencias/>}/>D
              <Route path="edit" element={<Form/>}/>
=======
>>>>>>> a3b46dafe6d42585d9b796a6c8579280bea5283d
              <Route path="/" element={<Experiencias/>}/>

              <Route path="edit" element={<Form/>}/>
              <Route path="/" element={<Experiencias/>}/>
              <Route path="edit" element={<Edit/>}/>
              <Route path="/" element={<Reservas/>}/>
              <Route path="/" element={<Experiencias/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

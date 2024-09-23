import React from 'react';
import logo from './logo.svg';
import Labs from "./Labs";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Kanbas from "./Kanbas";

import './App.css';

export default function App() {
  return (
   <HashRouter>
    <div>
     <Routes>
      <Route path="/" element={<Navigate to="Kanbas"/>}/>
      <Route path="/Labs/*" element={<Labs />} />
      <Route path="/Kanbas/*" element={<Kanbas />} />
     </Routes>
    </div>
   </HashRouter>
 );}
 

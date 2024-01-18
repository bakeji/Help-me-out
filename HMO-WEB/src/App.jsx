import React from "react";
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import SaveVideo from "./pages/savevideo/save-video";
import FeaHiw from "./pages/fea-hiw/fea-hiw";


export default function App(){
  return(
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SaveVideo/>} />
        <Route path="/features" element={<FeaHiw />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}
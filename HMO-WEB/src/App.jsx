import React from "react";
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import SaveVideo from "./pages/savevideo/save-video";
import FeaHiw from "./pages/fea-hiw/fea-hiw";
import Signup from "./pages/sign-up/sign-up";
import LogIn from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";


export default function App(){
  return(
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SaveVideo/>} />
        <Route path="/features" element={<FeaHiw />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/dashboard" element ={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}
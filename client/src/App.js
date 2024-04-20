import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Routes/Home';
import Login from './Routes/Login';
function App() {
  return (
   <> 
   <Routes>
   <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    {/* <Route path="signup" element={<Login />} /> */}
   
   </Routes>
    
   </>
  );
}

export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Liveable from './Pages/Liveable'; // New Liveable page
import MaximumPrice from './Pages/MaximumPrice'; // New MaximumPrice page
import "./App.css";
import SuburbModel from './Pages/SuburbModel'; // New SuburbModel page

function App() {
  return (
    <Router>
    
    <Routes>
        
        <Route path="/liveable" element={<Liveable />} /> {/* Route for the Liveable page */}
        <Route path="/maximum-price" element={<MaximumPrice />} /> {/* Route for the Maximum Price page */}
        <Route path="/suburb-model" element={<SuburbModel />} /> {/* Route for the Suburb Model page */}
    </Routes>
    
      
     
      
    </Router>
  );
}

export default App;
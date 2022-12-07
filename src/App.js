import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";


const App = () => {


  return (
    <Router>
        <NavBar />

      <Routes>
        
        <Route exact path="/" element={< Homepage />} />
        <Route path="/info-contact" element={< InfoContact />} />
        <Route path="/shin-tai" element={< ShinTai />} />
        <Route path="/testimonials" element={< Testimonials />} />
        <Route path="*" element={< ErrorPage />}/>
      </Routes>
    </Router>
  );
}



export default App;

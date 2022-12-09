import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import InfoContact from "./components/InfoContact";
import ShinTai from "./components/ShinTai";
import Testimonials from "./components/Testimonals";
import ErrorPage from "./components/ErrorPage";


const App = () => {

  return (
    <Router>
        <NavBar />
      <Routes>
        <Route exact path="/" element={
          < Homepage 
          title="This is the Homepage"
          description="this is the description"
          canonical="https://changethis.com/"
          />} />
        <Route path="/info-contact" element={
          < InfoContact 
          title="This is the Info page"
          description="this is the description"
          canonical="https://changethis.com/info-contact"
          />} />
        <Route path="/shin-tai" element={
          < ShinTai 
          title="This is the Shin Tai page"
          description="this is the description"
          canonical="https://changethis.com/shin-tai"
          />} />
        <Route path="/testimonials" element={
          < Testimonials 
          title="This is the Testimonials page"
          description="this is the description"
          canonical="https://changethis.com/testimonials"
          />} />
        <Route path="*" element={
          < ErrorPage
          title="This is the Error Page"
          description="this is the description"
          />} />
      </Routes>
    </Router>
  );
}


export default App;

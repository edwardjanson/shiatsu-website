import React from "react";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
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
      <header>
        <NavBar />
      </header>
      <GlobalStyle/>
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
      <Footer id="footer">© Betina Janson 2023</Footer>
    </Router>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  p {
    padding: 0.6rem 1.5rem;
  }

  h1, h2, h3 {
    font-family: "Bree Serif", Arial, Helvetica, sans-serif;
    margin: 1rem 0.5rem;
    color: #5a78b4;
  }

  body {
    font-family: "Playfair Display", Arial, Helvetica, sans-serif;
    color: black;
    max-width: 50rem;
    background-color: #dbdbdb;
    margin: 0 auto;
    font-size: 1rem;
    color: #595959;
    display: flex;
    flex-direction: column;
  }
`

const Footer = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem;
`

export default App;

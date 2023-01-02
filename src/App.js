import React from "react";
import styled from 'styled-components';
import { useState } from "react";
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./components/Homepage";
import Treatments from "./components/Treatments";
import ShinTai from "./components/ShinTai";
import Testimonials from "./components/Testimonals";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";


const App = () => {

  const [selectedLanguage, updateSelectedLanguage] = useState("en");

  return (
    <Router>
      <ScrollToTop />
      <header>
        <NavBar selectedLanguage={selectedLanguage} />
      </header>
      <GlobalStyle/>
      <Routes>
        <Route exact path="/" element={
          < Homepage 
          selectedLanguage={selectedLanguage}
          title="This is the Homepage"
          description="this is the description"
          canonical="https://changethis.com/"
          />} />
        <Route exact path="/treatments" element={
          < Treatments 
          selectedLanguage={selectedLanguage}
          title="This is the treatments page"
          description="this is the description"
          canonical="https://changethis.com/treatments"
          />} />
        <Route exact path="/contact" element={
          < Contact 
          selectedLanguage={selectedLanguage}
          title="This is the Info page"
          description="this is the description"
          canonical="https://changethis.com/contact"
          />} />
        <Route exact path="/shin-tai" element={
          < ShinTai 
          selectedLanguage={selectedLanguage}
          title="This is the Shin Tai page"
          description="this is the description"
          canonical="https://changethis.com/shin-tai"
          />} />
        <Route exact path="/testimonials" element={
          < Testimonials 
          selectedLanguage={selectedLanguage}
          title="This is the Testimonials page"
          description="this is the description"
          canonical="https://changethis.com/testimonials"
          />} />
        <Route exact path="*" element={
          < ErrorPage
          selectedLanguage={selectedLanguage}
          title="This is the Error Page"
          description="this is the description"
          />} />
      </Routes>
      <Footer id="footer">
        <FooterLinks>
          <Link to="/">Home</Link>
          ·
          <Link to="/shin-tai">Shin Tai</Link>
          ·
          <Link to="/testimonials">Testimonials</Link>
          ·
          <Link to="/treatments">Treatments</Link>
          ·
          <Link to="/contact">Contact</Link>
        </FooterLinks>
        <Copyright>
          © Betina Janson 2023
        </Copyright>
      </Footer>
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
    margin: 1rem 1.5rem;
    color: #5a78b4;
  }

  body {
    font-family: "Arsenal", Arial, Helvetica, sans-serif;
    color: black;
    max-width: 45rem;
    background-color: #ebebeb;
    margin: 0 auto;
    font-size: 1.1rem;
    color: #333333;
    display: flex;
    flex-direction: column;
  }

  a {
    color: #5a78b4;
    text-decoration: none;
  }

  a:visited {
    color: #5a78b4;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px -10px 10px -10px;
`

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.7rem;
`

const Copyright = styled.span`
`

export default App;

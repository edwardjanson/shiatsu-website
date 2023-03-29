import React from "react";
import styled from 'styled-components';
import { useState, useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./components/Homepage";
import Treatments from "./components/Treatments";
import ShinTai from "./components/ShinTai";
import Testimonials from "./components/Testimonals";
import Contact from "./components/Contact";


const App = () => {

  const [selectedLanguage, updateSelectedLanguage] = useState(null);
  const [pageLoad, updatePageLoad] = useState(false);

  useEffect(() => {
    updatePageLoad(false);

    if (!pageLoad) {
        if (window.location.pathname.startsWith("/static/")) {
          return;
        } else if (window.location.pathname.startsWith("/en/")) {
          updateSelectedLanguage("en");
          updatePageLoad(true);
        } else {
          updateSelectedLanguage("de");
          updatePageLoad(true);
        }
    }
  }, [])

  const languageSettings = 
        {en: {
              en: "English",
              de: "Englisch",
              languageCode: "en",
              languageChange: {
                change: "Change language",
                changeTo: "German",
                changeCode: "de",
                path: "/"
              },
              urls: {
                homepage: {
                  name: "Home",
                  path: "/en/"
                },
                shin_tai: {
                  name: "Shin Tai",
                  path: "/en/shin-tai/"
                },
                treatments: {
                  name: "Treatments",
                  path: "/en/treatments/"
                },
                testimonials: {
                  name: "Testimonials",
                  path: "/en/testimonials/"
                },
                contact: {
                  name: "Contact",
                  path: "/en/contact/"
                }
              }
        },

        de: {
          en: "German",
          de: "Deutsch",
          languageCode: "de",
          languageChange: {
            change: "Sprache ändern",
            changeTo: "Englisch",
            changeCode: "en",
            path: "/en/"
          },
          urls: {
            homepage: {
              name: "Startseite",
              path: "/"
            },
            shin_tai: {
              name: "Shin Tai",
              path: "/shin-tai/"
            },
            treatments: {
              name: "Behandlungen",
              path: "/behandlungen/"
            },
            testimonials: {
              name: "Testimonials",
              path: "/testimonials/"
            },
            contact: {
              name: "Kontakt",
              path: "/kontakt/"
            }
          }
      }
  }

  return (
    pageLoad ?
    <Router>
      <ScrollToTop />
      <header>
        <NavBar 
        languageSettings={languageSettings}
        selectedLanguage={selectedLanguage} 
        updateSelectedLanguage={updateSelectedLanguage} 
        />
      </header>
      <GlobalStyle/>
      <Routes>
        <Route exact path={languageSettings[selectedLanguage].urls.homepage.path} element={
          < Homepage 
          selectedLanguage={selectedLanguage}
          canonical={`https://www.shiatsutegernsee.de${languageSettings[selectedLanguage].urls.homepage.path}`}
          hrefEnglish={`https://www.shiatsutegernsee.de${languageSettings.en.urls.homepage.path}`}
          hrefGerman={`https://www.shiatsutegernsee.de${languageSettings.de.urls.homepage.path}`}
          />} />
        <Route exact path={languageSettings[selectedLanguage].urls.treatments.path} element={
          < Treatments 
          selectedLanguage={selectedLanguage}
          canonical={`https://www.shiatsutegernsee.de${languageSettings[selectedLanguage].urls.treatments.path}`}
          hrefEnglish={`https://www.shiatsutegernsee.de${languageSettings.en.urls.treatments.path}`}
          hrefGerman={`https://www.shiatsutegernsee.de${languageSettings.de.urls.treatments.path}`}
          />} />
        <Route exact path={languageSettings[selectedLanguage].urls.contact.path} element={
          < Contact 
          selectedLanguage={selectedLanguage}
          canonical={`https://www.shiatsutegernsee.de${languageSettings[selectedLanguage].urls.contact.path}`}
          hrefEnglish={`https://www.shiatsutegernsee.de${languageSettings.en.urls.contact.path}`}
          hrefGerman={`https://www.shiatsutegernsee.de${languageSettings.de.urls.contact.path}`}
          />} />
        <Route exact path={languageSettings[selectedLanguage].urls.shin_tai.path} element={
          < ShinTai 
          selectedLanguage={selectedLanguage}
          canonical={`https://www.shiatsutegernsee.de${languageSettings[selectedLanguage].urls.shin_tai.path}`}
          hrefEnglish={`https://www.shiatsutegernsee.de${languageSettings.en.urls.shin_tai.path}`}
          hrefGerman={`https://www.shiatsutegernsee.de${languageSettings.de.urls.shin_tai.path}`}
          />} />
        <Route exact path={languageSettings[selectedLanguage].urls.testimonials.path} element={
          < Testimonials 
          selectedLanguage={selectedLanguage}
          canonical={`https://www.shiatsutegernsee.de${languageSettings[selectedLanguage].urls.testimonials.path}`}
          hrefEnglish={`https://www.shiatsutegernsee.de${languageSettings.en.urls.testimonials.path}`}
          hrefGerman={`https://www.shiatsutegernsee.de${languageSettings.de.urls.testimonials.path}`}
          />} />
        <Route path="/media/*" />
        <Route path="*" element={
          <Navigate to={languageSettings[selectedLanguage].urls.homepage.path} replace 
        />} />
      </Routes>
      <Footer id="footer">
        <FooterLinks>
          <Link to={languageSettings[selectedLanguage].urls.homepage.path}>{languageSettings[selectedLanguage].urls.homepage.name}</Link>
          ·
          <Link to={languageSettings[selectedLanguage].urls.shin_tai.path}>{languageSettings[selectedLanguage].urls.shin_tai.name}</Link>
          ·
          <Link to={languageSettings[selectedLanguage].urls.testimonials.path}>{languageSettings[selectedLanguage].urls.testimonials.name}</Link>
          ·
          <Link to={languageSettings[selectedLanguage].urls.treatments.path}>{languageSettings[selectedLanguage].urls.treatments.name}</Link>
          ·
          <Link to={languageSettings[selectedLanguage].urls.contact.path}>{languageSettings[selectedLanguage].urls.contact.name}</Link>
        </FooterLinks>
        <Copyright>
          © Shiatsu am Tegernsee - Betina Janson {new Date().getFullYear()}
        </Copyright>
      </Footer>
    </Router>
    :
    ""
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

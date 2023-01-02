import { React, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const ErrorPage = ({languageSettings, selectedLanguage}) => {

    const content = 
    {en: {
        title: `This is the Testimonials page`,
        description: `this is the description`,
        h1: `This page does not exist`,
        p_1: `Go to the homepage`
    },

de: {
        title: `This is the Testimonials page`,
        description: `this is the description`,
        h1: `Diese Seite existiert nicht`,
        p_1: `Zur Startseite`
    }
}

    useEffect(() => {
        document.querySelector("html").setAttribute("lang", selectedLanguage);
        document.title = content[selectedLanguage].title;
        document.querySelector("meta[name='description']").setAttribute("content", content[selectedLanguage].description);
    }, [])

    return (
        <Main>
            <H1>{content[selectedLanguage].h1}</H1>
            <Paragraph>
                <Link to={languageSettings[selectedLanguage].homepage.path}>{content[selectedLanguage].p_1}</Link>
            </Paragraph>
        </Main>
    )
};

const Main = styled.div`
    max-width: 50rem;
    margin: 4rem auto;
`

const H1 = styled.h1`
    font-size: 1.5rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
`

const Paragraph = styled.a`
`

export default ErrorPage;
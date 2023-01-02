import { React, useEffect } from "react";
import styled from "styled-components";


const Contact = ({title, description, canonical}) => {

    useEffect(() => {
        document.title = title
        document.querySelector("meta[name='description']").setAttribute("content", description)
        document.querySelector("link[rel='canonical']").setAttribute("content", canonical)
    }, [])

    return (
        <Main>
            <H1>Contact & Location</H1>
            <H2>Contact</H2>
            <Paragraph>
                Telephone: <a href="+49 (0) 162 2845417">+49 (0) 162 2845417</a>
            </Paragraph>
            <Paragraph>
                Email: <a href="mailto:betinajanson@gmail.com">betinajanson@gmail.com</a>
            </Paragraph>
            <H2>Location</H2>           
            <Map src={process.env.PUBLIC_URL + "/media/map.png"}/>
        </Main>
    )
};

const Main = styled.div`
    max-width: 50rem;
    margin: 4rem auto;
`

const H1 = styled.h1`
    font-size: 2.5rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
`

const H2 = styled.h2`
    font-size: 1.2rem;
    padding-top: 1rem;
    display: flex;
    justify-content: left;
`

const Map = styled.img`
    max-width: 90%;
    margin: 2rem 5%;
`

const Paragraph = styled.p`
`

export default Contact;
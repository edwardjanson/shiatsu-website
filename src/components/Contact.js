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
            <H1>Shin Tai</H1>
            <Paragraph>
                Shin Tai Shiatsu has been developed by Saul Goodman in the 1980s and1990s. 
                He has been the founder of the International School of Shiatsu in Kiental (Switzerland). 
                After long years of working with Shiatsu, Osteopathy and Craniosacral Therapy, Saul Goodman developed the technics of Shin Tai.
            </Paragraph>
            <Paragraph>
                The various technics of ShianTai do have a complementary influence to those used with Shiatsu on the fascias, articulations and the muscles. 
                These technics allow to liberate toxins and help to align the whole body structure.
            </Paragraph>
            <Paragraph>
                Saul Goodman's webpage : <a href="https://shintaiinternational.com/" target="_blank">www.shintaiinternational.com</a>
            </Paragraph>
        </Main>
    )
};

const Main = styled.div`
    max-width: 50rem;
    margin: 4rem auto;
`

const H1 = styled.h1`
    font-size: 3rem;
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

const List = styled.ul`
`

const Li = styled.li`
`

const Paragraph = styled.p`
`

export default Contact;
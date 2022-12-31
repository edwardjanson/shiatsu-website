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
            <H1>Testimonials</H1>
            <H2>Martina</H2>
            <Paragraph>
                "Sowohl Schulter-/Nackenschmerzen als auch Schmerzen im Lendenbereich, die bis in die Knie ausstrahlten, haben mich lange Zeit begleitet. Die Schmerzen waren z.T. so stark, dass ich nur noch 20 Minuten spazieren gehen konnte. 
                Einiges hatte ich probiert, auch Akupunktur. 
                Eine Freundin empfahl mir, zu Betina zu gehen … Mittlerweile bin ich (fast) schmerzfrei, wandere wieder mehrere Stunden, meiner Computerarbeit gehe ich problemlos nach. 
                Shiatsu ist für mich sofortige und andauernde Entspannung, die Behandlung löst meine Muskelverspannungen. 
                Ich bin sehr froh, diese Therapie und Betina gefunden zu haben."
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

const Paragraph = styled.p`
`

export default Contact;
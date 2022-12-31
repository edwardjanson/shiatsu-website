import { React, useEffect } from "react";
import styled from "styled-components";


const InfoTarifs = ({title, description, canonical}) => {

    useEffect(() => {
        document.title = title
        document.querySelector("meta[name='description']").setAttribute("content", description)
        document.querySelector("link[rel='canonical']").setAttribute("content", canonical)
    }, [])

    return (
        <Main>
            <H1>Information & Tarifs</H1>
            <H2>My Training</H2>
            <Paragraph>
                After four years of studies at the International School of Shiatsu (ISS) in Geneva, I graduated in 2010. 
                I am of German origin and have previously lived in France, United Kingdom, Sweden and Spain.
            </Paragraph>
            <Paragraph>
                I now live in Gmund am Tegernsee (Germany).
            </Paragraph>
            <H2>Tarifs</H2>
            <Paragraph>
                Session duration 1 hour: 100 Euros
            </Paragraph>
            <Paragraph>
                You will receive a bill after the treatment. 24 hours notice required for cancellations. 
                Please note that only cash payments are currently accepted.
            </Paragraph>
            <Paragraph>
                Member ASCA, the majority of private insurances will cover the costs of your treatment.
            </Paragraph>
            <Paragraph>
                Active member of Suisse Association of Shiatsu (ASS).
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

export default InfoTarifs;
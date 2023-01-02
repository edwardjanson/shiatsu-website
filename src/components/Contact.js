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
            <Break><img src={process.env.PUBLIC_URL + "/media/logo_betina.png"}/></Break>
            <H2>Location</H2>
            <Paragraph>Address:</Paragraph> 
            <Paragraph>         
                <Address target="_blank" href="https://www.google.com/maps/place/Miesbacher+Str.+77,+83703+Gmund+am+Tegernsee,+Germany/@47.7689603,11.7444875,17z/data=!3m1!4b1!4m5!3m4!1s0x479d8d110478284f:0x51fc88b53ebc21ad!8m2!3d47.7689603!4d11.7466762">
                    Miesbacher Strasse 77<br/>
                    8703 Gmund Am Tegernsee
                </Address>     
            </Paragraph>       
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

const Break = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem;

    img {
        height: 2.5rem;
        opacity: 0.7;
    }
`

const Map = styled.img`
    max-width: 90%;
    margin: 2rem 5%;
`

const Address = styled.a`
    display: flex;
    line-height: 1.5rem;
`

const Paragraph = styled.p`
`

export default Contact;
import { React, useEffect } from "react";
import styled from "styled-components";

import MapImage from "../images/map.png";
import LogoPng from "../images/logo_betina.png";


const Contact = ({canonical, selectedLanguage, hrefEnglish, hrefGerman}) => {

    const content = 
    {en: {
            title: `Contact & Location | Betina Janson Shiatsu Tegernsee`,
            description: ``,
            h1: `Contact & Location`,
            h2_1: `Contact`,
            p_1: `Telephone`,
            p_2: `Email`,
            h2_2: `Location`,
            p_3: `Address`
        },

    de: {
            title: `Kontakt & Lage | Betina Janson Shiatsu am Tegernsee`,
            description: ``,
            h1: `Kontakt & Lage`,
            h2_1: `Kontakt`,
            p_1: `Telefon`,
            p_2: `Email`,
            h2_2: `Lage`,
            p_3: `Adresse`
        }
    }

    useEffect(() => {
        document.querySelector("html").setAttribute("lang", selectedLanguage);
        document.title = content[selectedLanguage].title;
        document.querySelector("meta[name='description']").setAttribute("content", content[selectedLanguage].description);
        document.querySelector("link[rel='canonical']").setAttribute("href", canonical);
        document.querySelector("link[hreflang='en']").setAttribute("href", hrefEnglish);
        document.querySelector("link[hreflang='de']").setAttribute("href", hrefGerman);
        document.querySelector("link[hreflang='x-default']").setAttribute("href", hrefEnglish);
    }, [selectedLanguage])

    return (
        <Main>
            <H1>{content[selectedLanguage].h1}</H1>
            <H2>{content[selectedLanguage].h2_1}</H2>
            <Paragraph>
                {content[selectedLanguage].p_1}: <a href="tel:+491622845417">+49 (0) 162 2845417</a>
            </Paragraph>
            <Paragraph>
                {content[selectedLanguage].p_2}: <a href="mailto:betinajanson@gmail.com">betinajanson@gmail.com</a>
            </Paragraph>
            <Break><img src={LogoPng}/></Break>
            <H2>{content[selectedLanguage].h2_2}</H2>
            <Paragraph>{content[selectedLanguage].p_3}:</Paragraph> 
            <Paragraph>         
                <Address target="_blank" href="https://www.google.com/maps/place/Miesbacher+Str.+77,+83703+Gmund+am+Tegernsee,+Germany/@47.7689603,11.7444875,17z/data=!3m1!4b1!4m5!3m4!1s0x479d8d110478284f:0x51fc88b53ebc21ad!8m2!3d47.7689603!4d11.7466762">
                    Miesbacher Strasse 77<br/>
                    83703 Gmund am Tegernsee
                </Address>     
            </Paragraph>       
            <Map src={MapImage}/>
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
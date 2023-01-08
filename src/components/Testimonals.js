import { React, useEffect } from "react";
import styled from "styled-components";


const Contact = ({canonical, selectedLanguage, hrefEnglish, hrefGerman}) => {

    const content = 
        {en: {
                title: `Testimonials | Betina Janson Shiatsu`,
                description: ``,
                h1: `Testimonials`,
                h2_1: `Doline`,
                p_1: `"What a feeling of well-being after a Shiatsu session! 
                I am always amazed by the interaction between the pressures on areas determined by Betina and the almost instantaneous release of muscular, nervous, tendon contractions etc… 
                as well as the reactivation of the digestive system. 
                For all this, many thanks to Betina."`
            },

        de: {
                title: `Testimonials | Betina Janson Shiatsu am Tegernsee`,
                description: ``,
                h1: `Testimonials`,
                h2_1: `Martina`,
                p_1: `"Sowohl Schulter-/Nackenschmerzen als auch Schmerzen im Lendenbereich, die bis in die Knie ausstrahlten, haben mich lange Zeit begleitet. Die Schmerzen waren z.T. so stark, dass ich nur noch 20 Minuten spazieren gehen konnte. 
                Einiges hatte ich probiert, auch Akupunktur. 
                Eine Freundin empfahl mir, zu Betina zu gehen … Mittlerweile bin ich (fast) schmerzfrei, wandere wieder mehrere Stunden, meiner Computerarbeit gehe ich problemlos nach. 
                Shiatsu ist für mich sofortige und andauernde Entspannung, die Behandlung löst meine Muskelverspannungen. 
                Ich bin sehr froh, diese Therapie und Betina gefunden zu haben."`
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
            <Paragraph>{content[selectedLanguage].p_1}</Paragraph>
        </Main>
    )
};

const Main = styled.div`
    max-width: 50rem;
    margin: 4rem auto;
`

const H1 = styled.h1`
    text-align: center;
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

const Paragraph = styled.p`
`

export default Contact;
import { React, useEffect } from "react";
import styled from "styled-components";


const Treatments = ({canonical, selectedLanguage}) => {

    const content = 
        {en: {
                title: `This is the Treatments page`,
                description: `this is the description`,
                h1: `Shiatsu Treatments`,
                h2_1: `My Training`,
                p_1: `After four years of studies at the International School of Shiatsu (ISS) in Geneva, I graduated in 2010. 
                I am of German origin and have previously lived in France, United Kingdom, Sweden and Spain.`,
                p_2: `I now live in Gmund am Tegernsee (Germany).`,
                h2_2: `Tarifs`,
                p_3: `Session duration 1 hour: 100 Euros`,
                p_4: `You will receive a bill after the treatment. 24 hours notice required for cancellations. 
                Please note that only cash payments are currently accepted.`,
                p_5: `Member ASCA, the majority of private insurances will cover the costs of your treatment.`,
                p_6: `Active member of Suisse Association of Shiatsu (ASS).`
            },

        de: {
                title: `This is the Treatments page`,
                description: `this is the description`,
                h1: `Shiatsu Behandlungen`,
                h2_1: `Berufliche Laufbahn im Bereich des Shiatsu`,
                p_1: `Nach einem vierjährigen Studium an der Internationalen Schule von Shiatsu (ISS) in Genf habe ich 2010 mein Diplom dort mit Erfolg abgeschlossen. 
                Ich bin deutschen Ursprungs und habe in der Vergangenheit in Frankreich, England, Schweden und Spanien gelebt.`,
                p_2: `Zur Zeit lebe ich in Gmund am Tegernsee.`,
                h2_2: `Tarife`,
                p_3: `Behandlungsdauer 1 Stunde: 100 Euro`,
                p_4: `Terminansage bitte 24 Stunden im voraus.`,
                p_5: `Mitglied der ASCA, die Mehrheit der privaten Krankenkassen werden ihre Behandlung zurückerstatten.`,
                p_6: `Aktives Mitglied der Schweizer Gesellschaft für Shiatsu (SGS).`
            }
        }

    useEffect(() => {
        document.querySelector("html").setAttribute("lang", selectedLanguage);
        document.title = content[selectedLanguage].title;
        document.querySelector("meta[name='description']").setAttribute("content", content[selectedLanguage].description);
        document.querySelector("link[rel='canonical']").setAttribute("content", canonical);
    }, [])

    return (
        <Main>
            <H1>{content[selectedLanguage].h1}</H1>
            <H2>{content[selectedLanguage].h2_1}</H2>
            <Paragraph>{content[selectedLanguage].p_1}</Paragraph>
            <Paragraph>{content[selectedLanguage].p_2}</Paragraph>
            <Break><img src={process.env.PUBLIC_URL + "/media/logo_betina.png"}/></Break>
            <H2>{content[selectedLanguage].h2_2}</H2>
            <Paragraph>{content[selectedLanguage].p_3}</Paragraph>
            <Paragraph>{content[selectedLanguage].p_4}</Paragraph>
            <Paragraph>{content[selectedLanguage].p_5}</Paragraph>
            <Link href="http://www.asca.ch/" target="_blank">www.asca.ch</Link>
            <br/>
            <br/>
            <Paragraph>{content[selectedLanguage].p_6}</Paragraph>
            <Link href="https://shiatsuverband.ch/" target="_blank">shiatsuverband.ch</Link>
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

const Paragraph = styled.p`
`

const Link = styled.a`
    padding-left: 1.5rem;
`

export default Treatments;
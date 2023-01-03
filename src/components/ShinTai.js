import { React, useEffect } from "react";
import styled from "styled-components";

import Gallery from "./Gallery";
import ShinTai1 from "../images/shin_tai_1.png";
import ShinTai2 from "../images/shin_tai_2.png";
import ShinTai3 from "../images/shin_tai_3.png";


const ShinTai = ({canonical, selectedLanguage, hrefEnglish, hrefGerman}) => {

    const content = 
        {en: {
                title: `Shin Tai Tegernsee | Betina Janson Shiatsu`,
                description: ``,
                h1: `Shin Tai`,
                p_1: `Shin Tai Shiatsu has been developed by Saul Goodman in the 1980s and 1990s. 
                He has been the founder of the International School of Shiatsu in Kiental (Switzerland). 
                After long years of working with Shiatsu, Osteopathy and Craniosacral Therapy, Saul Goodman developed the technics of Shin Tai.`,
                p_2: `The various technics of ShianTai do have a complementary influence to those used with Shiatsu on the fascias, articulations and the muscles. 
                These technics allow to liberate toxins and help to align the whole body structure.`,
                p_3: `Saul Goodman's webpage :`
            },

        de: {
                title: `Shin Tai am Tegernsee | Betina Janson Shiatsu`,
                description: ``,
                h1: `Shin Tai`,
                p_1: `Shin Tai Shiatsu ist in den 80er und 90er Jahre von dem Amerikaner Saul Goodman entwickelt worden. 
                Er ist ebenfalls der Gründer der Internationalen Shiatsu Schule (ISS) in Kiental (Schweiz). 
                Nach langjähriger Tätigkeit mit Shiatsu, Osteopathie und der Craniosacraltherapie, entwickelte Saul Goodman die Techniken des Shin Tai.`,
                p_2: `Die verschiedenen Techniken des Shin Tai haben eine ergänzende Wirkung zu den Techniken der Shiatsu Therapie. 
                Hierbei wurden von Saul Goodman Techniken eingesetzt die dem Bindegewebe, Muskeln und Gelenken helfen Verspannungen und Toxine im Körper zu lösen und auszuscheiden. 
                Dieser Vorgang hilft die Körperhaltung zu verbessern und Schmerzen zu lindern.`,
                p_3: `Internetseite von Saul Goodman :`
            }
        }

    const media = [
                    {images: [
                        ShinTai1,
                        ShinTai2,
                        ShinTai3
                        ]},
                    {videos: [
                        ]}
                ]

    useEffect(() => {
        document.querySelector("html").setAttribute("lang", selectedLanguage);
        document.title = content[selectedLanguage].title;
        document.querySelector("meta[name='description']").setAttribute("content", content[selectedLanguage].description);
        document.querySelector("link[rel='canonical']").setAttribute("content", canonical);
        document.querySelector("link[hreflang='en']").setAttribute("href", hrefEnglish);
        document.querySelector("link[hreflang='de']").setAttribute("href", hrefGerman);
        document.querySelector("link[hreflang='x-default']").setAttribute("href", hrefEnglish);
    }, [selectedLanguage])

    return (
        <Main>
            <Gallery media={media} />
            <H1>{content[selectedLanguage].h1}</H1>
            <Paragraph>{content[selectedLanguage].p_1}</Paragraph>
            <Paragraph>{content[selectedLanguage].p_2}</Paragraph>
            <Paragraph>
                {content[selectedLanguage].p_3} <a href="https://shintaiinternational.com/" target="_blank">www.shintaiinternational.com</a>
            </Paragraph>
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

const Paragraph = styled.p`
`

export default ShinTai;
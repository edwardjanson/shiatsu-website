import { React, useEffect } from "react";
import styled from "styled-components";

import Gallery from "./Gallery";
import LogoPng from "../images/logo_betina.png";
import ZenShiatsu from "../images/zen_shiatsu_1.png";
import ProfileImage from "../images/betina_janson.jpg";


const Homepage = ({selectedLanguage, canonical, hrefEnglish, hrefGerman}) => {

    const media = [
                    {images: [
                        ZenShiatsu
                    ]},
                    {videos: [
                        "https://www.youtube.com/embed/OYWSySDHc20"
                    ]}
                ]
    
    const content = 
        {en: {
                title: `Shiatsu Tegernsee | Betina Janson`,
                description: ``,
                h1: `Betina Janson – Shiatsu`,
                h2_1: `Origin and Philosophy`,
                p_1: `Shiatsu is a traditional form of therapy from Japan. 
                Shiatsu shares the same roots as Chinese Acupuncture, both originating from the Traditional Chinese Medicine (TCM).`,
                p_2: `Shiatsu is known for its healing power without the use of medication. 
                According to the Traditional Chinese Medicine, the physical and psychological symptoms arising in the human body, are the source of an unbalance of the energy flow in our body. 
                By balancing the flow of energy in the meridians, Shiatsu can relieve many conditions, help prevent the build-up of stress, and restore vitality and well-being. 
                Literally translated as "finger pressure", Shiatsu uses comfortable pressure from the thumbs and palms applied to to the energy channels and acupressure points in the body. 
                Gentle stretches and rotations of the limbs and joints may as well be included.`,
                h2_2: `Benefits of Shiatsu`,
                list_1: 
                    [
                        `Calming, grounding and deeply relaxing for body and mind - this alone will stimulate your own self-healing abilities`,
                        `Creates a sense of well-being`,
                        `Helps to release mental and emotional stress`,
                        `Relieves stiffness and tension, improves posture`,
                        `Helps to restore and rebalance energy levels`,
                        `Helps clear toxins from the body`,
                        `Improves immunity`
                    ]
                ,
                h2_3: `Conditions helped by Shiatsu`,
                list_2: 
                    [
                        `Headaches and migraines`,
                        `Stress and anxiety`,
                        `Backache`,
                        `Neck and shoulder tensions`,
                        `Digestive problems`,
                        `Menstrual problems`,
                        `Joint pain and reduced mobility`,
                        `Fatigue and insomnia`
                    ],
                p_3: `This list is not complete.
                Regular Shiatsu treatment is a good way to prevent health problems arising.
                The number of treatments required will depend on your general state of health and the acute or chronic nature of the conditions needing help.`,
                h2_4: `Your Shiatsu Session`,
                p_4: `Your session will last 1 hour (first session 1H15).`,
                p_5: `You will wear comfortable clothing (preferably cotton) and the session will take place on a futon. 
                You will receive a treatment adapted to your personal needs.`,
                p_6: `After the treatment your practitioner may give you advice (exercises, stretching, food recommendations...).`
            },

        de: {
                title: `Shiatsu am Tegernsee | Betina Janson`,
                description: `this is the description`,
                h1: `Betina Janson – Shiatsu`,
                h2_1: `Was ist Shiatsu?`,
                p_1: `Shiatsu stammt ursprünglich aus Japan und ist vom japanischen Gesundheitsministerium als therapeutische Körperarbeit anerkannte Methode. 
                Die Wurzeln des Shiatsu liegen, genauso wie bei der Akupunktur, in der traditionellen chinesischen Medizin (TCM).`,
                p_2:`In einem Bericht der EU-Kommission zu komplementären Verfahren von 1997, wird Shiatsu als eine von 8 Methoden namentlich erwähnt.
                In Europa hat sich, dank des japanischen Shiatsu Therapeuten und Professor der Psychologie Dr Masunaga, ein therapeutisches Shiatsu entwickelt, das eine wirksame Behandlungsform bei einer Vielzahl von Beschwerden und Krankheiten darstellt. 
                Bei der Shiatsu-Akupressur-Massage werden verschiedene Akupressurpunkte für eine geraume Zeit sanft gehalten. 
                Dabei kann es sich, je nach Zone, um den Daumen, die Handinnenfläche, das Knie oder den Ellebogen handeln. 
                Gut ausgebildete Shiatsu-Therapeuten sind somit in der Lage gezielt energetische Muster auszugleichen, Blockaden zu lösen und die Selbstheilungskräfte des Menschen zu aktivieren und zu stärken. 
                Daher ist Shiatsu eine wirksame Therapie bei einer Vielzahl von körperlichen und seelischen Beschwerden und in Lebenskrisen, welche zu angestautem Stress, Erschöpfung und Verspannungen führen können. 
                In der Geborgenheit und Ruhe der Behandlung kann der Mensch seinen eigenen Körper wieder wahrnehmen und Kräfte sammeln.`,
                h2_2: `Wirkung von Shiatsu`,
                list_1: 
                    [
                        `Stressbewältigung durch tiefe Entspannung von Körper und Seele`,
                        `Durch die Harmonisierung der Körperenergien werden die Selbstheilungskräfte wachgerufen`,
                        `Verhilft dem Körper beim Ausscheiden von Toxinen`,
                        `Stabilisiert das Immunsystem und fördert somit die Gesundheitserhaltung`,
                        `Regeneration bei Erschöpfungszuständen`,
                        `Sensibilisierung der eigenen Körperwahrnehmung`,
                        `Löst Verkrampfungen und Versteifungen und verbessert dadurch die Körperhaltung`
                    ]
                ,
                h2_3: `Beschwerden und Krankheiten`,
                list_2: 
                    [
                        `Kopfschmerzen und Migraine`,
                        `Stress und Angstzustände`,
                        `Rückenschmerzen`,
                        `Nacken- und Schulterschmerzen`,
                        `Verdauungsprobleme (Bauchschmerzen)`,
                        `Menstruationsstörungen und -Beschwerden`,
                        `Gelenkschmerzen und bei eingeschränkter Beweglichkeit`,
                        `Müdigkeit und Schlafstörungen`
                    ],
                p_3: `Diese Liste ist nicht vollständig.
                Regelmässige Shiatsubehandlungen sind ein wirksames Mittel um gegen Krankheiten vorzubeugen.`,
                h2_4: `Shiatsu Behandlung`,
                p_4: `Die Dauer beträgt 1 Stunde (erste Behandlung 90 Minuten).`,
                p_5: `Bei der Behandlung tragen sie bequeme Kleidung (wenn möglich aus Baumwolle). 
                Die Behandlung findet auf einem Futon auf dem Boden statt und richtet sich nach ihren persönlichen Bedürfnissen aus.`,
                p_6: `Nach der Behandlung wird der Therapeut ihnen weitere Ratschläge geben (Dehnübungen, Entspannungs- Lockerungsübungen, Ernährungsempfehlungen…).`
            }
        }

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
            <Heading>
                <H1>{content[selectedLanguage].h1}</H1>
                <Profile src={ProfileImage}></Profile>
            </Heading>
            <H2>{content[selectedLanguage].h2_1}</H2>
            <Paragraph>{content[selectedLanguage].p_1}</Paragraph>
            <Paragraph>{content[selectedLanguage].p_2}</Paragraph>
            <Break><img src={LogoPng}/></Break>
            <H2>{content[selectedLanguage].h2_2}</H2>
            <List>
                <Li>{content[selectedLanguage].list_1[0]}</Li>
                <Li>{content[selectedLanguage].list_1[1]}</Li>
                <Li>{content[selectedLanguage].list_1[2]}</Li>
                <Li>{content[selectedLanguage].list_1[3]}</Li>
                <Li>{content[selectedLanguage].list_1[4]}</Li>
                <Li>{content[selectedLanguage].list_1[5]}</Li>
                <Li>{content[selectedLanguage].list_1[6]}</Li>
            </List>
            <Break><img src={LogoPng}/></Break>
            <H2>{content[selectedLanguage].h2_3}</H2>
            <List>
                <Li>{content[selectedLanguage].list_2[0]}</Li>
                <Li>{content[selectedLanguage].list_2[1]}</Li>
                <Li>{content[selectedLanguage].list_2[2]}</Li>
                <Li>{content[selectedLanguage].list_2[3]}</Li>
                <Li>{content[selectedLanguage].list_2[4]}</Li>
                <Li>{content[selectedLanguage].list_2[5]}</Li>
                <Li>{content[selectedLanguage].list_2[6]}</Li>
                <Li>{content[selectedLanguage].list_2[7]}</Li>
            </List>
            <br/>
            <Paragraph>{content[selectedLanguage].p_3}</Paragraph>
            <Break><img src={LogoPng}/></Break>
            <H2>{content[selectedLanguage].h2_4}</H2>
            <Paragraph>{content[selectedLanguage].p_4}</Paragraph>
            <Paragraph>{content[selectedLanguage].p_5}</Paragraph>
            <Paragraph>{content[selectedLanguage].p_6}</Paragraph>
        </Main>
    )
};

const Main = styled.div`
    margin: 4rem auto;
    width: 100%;
`

const Heading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-right: 3rem;
`

const Profile = styled.img`
    width: 8rem;
    height: 100%;
    border-radius: 3%;
    border: 3px solid #d1d1d1;
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

const List = styled.ul`
    margin-left: 3rem;
`

const Li = styled.li`
    padding: 0 0.6rem;
`

const Paragraph = styled.p`
`

export default Homepage;
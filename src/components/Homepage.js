import { React, useEffect } from "react";
import styled from "styled-components";

import Gallery from "./Gallery";

const Homepage = ({title, description, canonical}) => {

    const media = [
                    {images: [
                        "/media/zen_shiatsu_1.png"
                    ]},
                    {videos: [
                        "https://www.youtube.com/embed/OYWSySDHc20"
                    ]}
                ]

    useEffect(() => {
        document.title = title
        document.querySelector("meta[name='description']").setAttribute("content", description)
        document.querySelector("link[rel='canonical']").setAttribute("content", canonical)
    }, [])

    return (
        <Main>
            <Gallery media={media} />
            <Heading>
                <H1>Betina Janson – Shiatsu</H1>
                <Profile src={process.env.PUBLIC_URL + "/media/betina_janson.jpg"}></Profile>
            </Heading>
            <H2>Origin and Philosophy</H2>
            <Paragraph>
                Shiatsu is a traditional form of therapy from Japan. 
                Shiatsu shares the same roots as Chinese Acupuncture, both originating from the Traditional Chinese Medicine(TCM). 
                Shiatsu is known for its healing power without the use of medication. 
                According to the Traditional Chinese Medicine, the physical and psychological symptoms arising in the human body, are the source of an unbalance of the energy flow in our body. 
                By balancing the flow of energy in the meridians, Shiatsu can relieve many conditions, help prevent the build-up of stress, and restore vitality and well-being. 
                Literally translated as "finger pressure", Shiatsu uses comfortable pressure from the thumbs and palms applied to to the energy channels and acupressure points in the body. 
                Gentle stretches and rotations of the limbs and joints may as well be included.
            </Paragraph>
            <H2>Benefits of Shiatsu</H2>
            <List>
                <Li>Calming, grounding and deeply relaxing for body and mind - this alone will stimulate your own self-healing abilities</Li>
                <Li>Creates a sense of well-being</Li>
                <Li>Helps to release mental and emotional stress</Li>
                <Li>Relieves stiffness and tension, improves posture</Li>
                <Li>Helps to restore and rebalance energy levels</Li>
                <Li>Helps clear toxins from the body</Li>
                <Li>Improves immunity</Li>
            </List>
                <H2>Conditions helped by Shiatsu</H2>
                <List>
                <Li>Headaches and migraines</Li>
                <Li>Stress and anxiety</Li>
                <Li>Backache</Li>
                <Li>Neck and shoulder tensions</Li>
                <Li>Digestive problems</Li>
                <Li>Menstrual problems</Li>
                <Li>Joint pain and reduced mobility</Li>
                <Li>Fatigue and insomnia</Li>
            </List>
            <Paragraph>...</Paragraph>
            <Paragraph>
                This list is not complete.
                Regular Shiatsu treatment is a good way to prevent health problems arising.
                The number of treatments required will depend on your general state of health and the acute or chronic nature of the conditions needing help.
            </Paragraph>
            <H2>Your Shiatsu Session</H2>
            <Paragraph>
                Your session will last 1 hour (first session 1H15).
            </Paragraph>
            <Paragraph>
                You will wear comfortable clothing ( preferably cotton) and the session will take place on a futon. You will receive a treatment adapted to your personal needs.
            </Paragraph>
            <Paragraph>
                After the treatment your practitioner may give you advice ( exercises, stretching, food recommendations...).
            </Paragraph>
        </Main>
    )
};

const Main = styled.div`
    max-width: 50rem;
    margin: 4rem auto;
`

const Heading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
    padding-right: 2rem;
    margin-bottom: -2rem;
`

const Profile = styled.img`
    width: 8rem;
    height: 100%;
    border-radius: 50%;
    border: 3px solid #d1d1d1;
`

const H1 = styled.h1`
    font-size: 3rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
`

const H2 = styled.h2`
    font-size: 1.2rem;
    padding: 1rem;
    display: flex;
    justify-content: left;
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
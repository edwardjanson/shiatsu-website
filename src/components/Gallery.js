import { useState, useRef } from 'react';
import styled from 'styled-components';


const Gallery = ({media}) => {

    const [activeMedia, changeActiveMedia] = useState(0);
    const imageCount = useRef(0);

    const mediaItems = media.map((type) => {
        const mediaFound = []

        if (Object.keys(type)[0] === "images") {
            imageCount.current = type.images.length;
            const ImagesFound = type.images.map((image, imageIndex) => {
                return <Image className={imageIndex === activeMedia? "show" : "hide"} src={process.env.PUBLIC_URL + image} key={imageIndex}/>
            })
            mediaFound.push(ImagesFound)
        }

        if (Object.keys(type)[0] === "videos") {
            const videosFound = type.videos.map((video, videoIndex) => {
                return <Iframe allow="fullscreen;" className={imageCount.current + videoIndex === activeMedia? "show" : "hide"} src={video} key={imageCount.current + videoIndex + "?rel=0&modestbranding=1"} width="1120" height="630"/>
            })
            mediaFound.push(videosFound)
        }

        return mediaFound;
    })

    const increaseOne = () => {
        if (activeMedia + 1 < (media[0].images.length + media[1].videos.length)) {
            changeActiveMedia(activeMedia + 1)
        }
    }

    const decreaseOne = () => {
        if (activeMedia - 1 !== -1) {
            changeActiveMedia(activeMedia - 1)
        }
    }

    return (
        <Container>
            <Section className="media">
                <SmallNav>
                    <SmallButton className={activeMedia === 0 ? "side disable" : "side"} onClick={decreaseOne}>&#8249;</SmallButton>
                </SmallNav>
                <SmallMedia>
                    {mediaItems}
                </SmallMedia>
                <SmallNav>
                    <SmallButton className={activeMedia === media[0].images.length + media[1].videos.length - 1 ? "side disable" : "side"} onClick={increaseOne}>&#8250;</SmallButton>
                </SmallNav>
            </Section>
        </Container>
    );
};

const Container = styled.div`
    background-color: #d1d1d1;
    margin: 0 -100rem;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`

const Section = styled.div`
    display: flex;
    justify-content: center;
    width: 15rem;
    height: 10.25rem;
    margin: 4rem auto 2rem;

    @media (min-width: 375px) {
        width: 19.5rem;
        height: 13.3rem;
    }
    @media (min-width: 423px) {
        width: 22rem;
        height: 15rem;
    }
    @media (min-width: 521px) {
        width: 28.5rem;
        height: 19.4rem;
    }
    @media (min-width: 591px) {
        width: 31rem;
        height: 21.2rem;
    }
    @media (min-width: 751px) {
        width: 36rem;
        height: 24.6rem;
    }

    & .side {
        text-shadow: 1px 1px 3px black;
        z-index: 1;
        height: 100%;
        font-size: 5rem;
        background-color: transparent;
        color: white;
        border: 0;
    }
    & .open {
        position: relative;
        text-shadow: 1px 1px 3px black;
        margin-bottom: -145%;
        z-index: 2;
        top: 2%;
        left: -20%;
        font-size: 1.5rem;
        background-color: transparent;
        color: white;
        border: 0;
    }
`

const SmallNav = styled.div`
    display: flex;
    flex-direction: column;
    & .button {
        font-family: "Rajdhani", Arial, Helvetica, sans-serif;
    }
`

const SmallMedia = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 -2.1rem;
`

const Iframe = styled.iframe`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border: 0;
    &.hide {
        display: none;
    }
`

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    &.hide {
        display: none;
    }
`

const SmallButton = styled.button`
    font-family: "Rajdhani", Arial, Helvetica, sans-serif;
    z-index: 1;
    padding: 0;
    &.disable {
        opacity: 0.3;
        color: #b0b0b0;
        pointer-events: none;
    }
    &:active {
        color: #f49f1c;
    }
    @media (hover:hover) {
        &:hover {
            color: #f49f1c !important;
            cursor: pointer;
        }
    }
`

export default Gallery;
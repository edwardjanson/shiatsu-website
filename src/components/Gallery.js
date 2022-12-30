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
                <MediaNav>
                    <Button className={activeMedia === 0 ? "side disable" : "side"} onClick={decreaseOne}>&#8249;</Button>
                </MediaNav>
                <Media>
                    {mediaItems}
                </Media>
                <MediaNav>
                    <Button className={activeMedia === media[0].images.length + media[1].videos.length - 1 ? "side disable" : "side"} onClick={increaseOne}>&#8250;</Button>
                </MediaNav>
            </Section>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100vw;
    margin-left: -50vw;
    left: 50%;
    background-color: #d1d1d1;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`

const Section = styled.div`
    display: flex;
    justify-content: center;
    max-width: 45rem;
    padding: 0 0.5rem;
    height: 10.25rem;
    margin: 4rem auto 2rem;

    @media (min-width: 375px) {
        height: 13.3rem;
    }
    @media (min-width: 423px) {
        height: 15rem;
    }
    @media (min-width: 521px) {
        height: 19.4rem;
    }
    @media (min-width: 591px) {
        height: 21.2rem;
    }
    @media (min-width: 751px) {
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
`

const MediaNav = styled.div`
    display: flex;
    flex-direction: column;

    & .button {
        font-family: "Rajdhani", Arial, Helvetica, sans-serif;
    }
`

const Media = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Iframe = styled.iframe`
    max-width: 90%;
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

const Button = styled.button`
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
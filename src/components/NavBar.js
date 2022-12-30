import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";


const Header = ({handleScroll, buttonScroll}) => {

    const [headerState, setHeaderState] = useState("show");
    const [burgerOpen, updateBurgerOpen] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        let lastY = 0;
        window.onscroll = () => {
            let y = window.scrollY;
            if (y > lastY && y > 0) {
                setHeaderState("hide");
                updateBurgerOpen(false);
            }
            if (y < lastY && y > 0) setHeaderState("show");
            if (buttonScroll) {
                setHeaderState("hide");
                updateBurgerOpen(false);
            }
            lastY = y;
        }      
    }, [buttonScroll]);

    return (
        <Section className={"section " + headerState} id="header">
            <Logo><LogoImage src={process.env.PUBLIC_URL + "/media/logo_betina.png"}></LogoImage>Betina Janson</Logo>
            <Burger className={burgerOpen ? "change" : ""} onClick={() => {
                updateBurgerOpen(!burgerOpen);
                setInitialLoad(false);
                }
            }>
                <BurgerBar/>
            </Burger>

            <BurgerMenu className={(burgerOpen ? "opened" : "closed") + (initialLoad ? " initial": "")}>
                <NavLinks className={burgerOpen ? "opened" : "closed"}>
                    <Link to="/" onClick={() => updateBurgerOpen(false)}>Home</Link>
                    <Link to="/shin-tai" onClick={() => updateBurgerOpen(false)}>Shin Tai</Link>
                    <Link to="/testimonials" onClick={() => updateBurgerOpen(false)}>Testimonials</Link>
                    <Link to="/info-contact" onClick={() => updateBurgerOpen(false)}>Info Contact</Link>
                </NavLinks>
            </BurgerMenu>
        </Section>
    );
};

const Section = styled.div`
    z-index: 3;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 50rem;
    transition: 0.5s;
    margin: 0 auto;
    
    &.hide {
        top: -4rem;
    }
    
    &.show {
        top: 0;
    }
`

const Logo = styled.h1`
    z-index: 4;
    position: absolute;
    top: 0.4rem;
    left: 1rem;
    font-size: 1.5rem;
    margin: 0;
    color: #5a78b4;
    display: flex;
    align-items: center;
    gap: 1rem;
`

const LogoImage = styled.img`
    height: 3rem;
`

// Inspired from: https://codepen.io/Bilal1909/pen/KKdrmRP
const Burger = styled.div`
    z-index: 4;
    top: 2rem;
    right: 1rem;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 30px;
    cursor: pointer;
    &:before, :after, div {
        background: #5a78b4;
        content: "";
        display: block;
        height: 2px;
        margin: 6px 0;
        transition: 0.75s;
    }
    &.change:before {
        transform: translateY(8px) rotate(-45deg);
    }
    &.change:after {
        transform: translateY(-8px) rotate(45deg);
    }
    &.change div {
        transform: scale(0);
    }
`

const BurgerBar = styled.div`
`

const expandBurger = keyframes`
    0% {
        transform: translateY(-79%);
    }
    100% { 
        transform: translateY(0);
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
`

const collapseBurger = keyframes`
    0% { 
        transform: translateY(0);
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
    100% { 
        transform: translateY(-79%);
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    }
`

const BurgerMenu = styled.div`
    display: none;
    position: absolute;
    padding-right: 5rem;
    right: 0;
    top: 0;
    gap: 1.5em;
    background-color: rgba(219, 219, 219, 0.98);
    width: 100%;
    height: 19rem;
    opacity: 1;
    &.initial {
        animation-duration: 0s !important;
    }
    &.opened {
        animation: ${expandBurger} 0.75s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        animation-fill-mode: forwards;
    }
    &.closed {
        animation: ${collapseBurger} 0.75s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        animation-fill-mode: forwards;
    }
`

const NavLinks = styled.div`
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.8rem;
    opacity: 1;
    font-size: 1.4rem;

    &.closed {
        opacity: 0;
        transition: opacity 0s 0.75s;
    }

    a {
      text-decoration: none;
      color: #5a78b4;
    }
`

export default Header;
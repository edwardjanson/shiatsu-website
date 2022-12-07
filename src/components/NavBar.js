import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shin-tai">Shin Tai</Link>
      </li>
      <li>
        <Link to="/testimonials">Testimonials</Link>
      </li>
      <li>
        <Link to="/info-contact">Info Contact</Link>
      </li>
    </ul>
  );
}

export default NavBar;
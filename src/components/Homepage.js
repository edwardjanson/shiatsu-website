import { React, useEffect } from "react";


const Homepage = ({title, description, canonical}) => {

    useEffect(() => {
        document.title = title
        document.querySelector("meta[name='description']").setAttribute("content", description)
        document.querySelector("link[rel='canonical']").setAttribute("content", canonical)
    }, [])

    return (
        <div>
        </div>
    )
};


export default Homepage;
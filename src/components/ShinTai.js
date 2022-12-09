import { React, useEffect } from "react";


const ShinTai = ({title, description, canonical}) => {

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


export default ShinTai;
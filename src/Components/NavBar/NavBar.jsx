
import { Icon } from '@iconify/react';


import "./NavBar.css"

export const NavBar = () => {
    return(
        <div className="container cont">
        <a target="_blank" rel="noreferrer"  href="https://github.com/LeandroMore1"><Icon className="icono" icon="mdi:github" /></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leandro-more-2067a4171/"><Icon className="icono"  icon="mdi:linkedin" /></a>
        <a href="/cv.pdf" download="cv.pdf"><Icon className="icono ic" icon="academicons:cv-square" /></a>
        </div>
    )
}		


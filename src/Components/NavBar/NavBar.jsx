
import { Icon } from '@iconify/react';


import "./NavBar.css"

export const NavBar = () => {
    return(
        <div className="container">
        <a target="_blank" href=""><Icon className="icono" icon="mdi:github" /></a>
        <a target="_blank" href=""><Icon className="icono"  icon="mdi:linkedin" /></a>
        <a target="_blank" href=""><Icon className="icono ic" icon="academicons:cv-square" /></a>
        </div>
    )
}		


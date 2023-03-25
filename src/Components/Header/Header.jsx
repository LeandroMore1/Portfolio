import { NavBar } from "../NavBar/NavBar";
import { ButtonsHeader } from "../ButtonsHeader/ButtonsHeader";
import "./Header.css"

export const Header = () => {
    return(
        <>
        <NavBar/>
        <div className="titulosDiv container d-flex flex-column align-items-center align-items-md-start">
        <h1 className="">Manuel Leandro More,</h1>
        <h2 className="">Desarrollador Front End</h2>
        </div>
        <ButtonsHeader/>
        <div className="spacer layer1"></div>
        
        </>
    )
}
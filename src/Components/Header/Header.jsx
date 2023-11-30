import { NavBar } from "../NavBar/NavBar";
import { ButtonsHeader } from "../ButtonsHeader/ButtonsHeader";
import "./Header.css"

export const Header = () => {
    return (
        <>  
        <div className="header">
            <div className="spacer layer1">
                <NavBar />
                <div className="titulosDiv container cont d-flex flex-column align-items-center align-items-md-start">
                    <h1 className="">Leandro Manuel More</h1>
                    <h2 className="">Desarrollador Full Stack</h2>
                </div>
                <ButtonsHeader />
            </div>
            </div>
        </>
    )
}
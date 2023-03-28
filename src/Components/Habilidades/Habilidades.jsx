import "./Habilidades.css"
import github from "../waves/github.png"

export const Habilidades = () => {
    return (
        <>
            <div className="spacer layer2"></div>
            <div className="container d-flex flex-column align-items-md-start">
                <h1 id="habilidades" className="d-flex align-self-md-start titulo">Habilidades</h1>
                <div className=" d-flex flex-column flex-md-row justify-content-md-around contenedor">
                    <div className="d-flex flex-column align-items-center cont1">
                        <h2 className="d-flex align-self-md-start subtitulo">Front End:</h2>
                        <div className="d-flex cont1">
                            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                            <img className="logo " src="https://www.seekpng.com/png/full/141-1415372_css3-icon-png.png" alt="" />
                            <img className="logo" src="https://cdn.cdnlogo.com/logos/h/84/html.svg" alt="" />
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center">
                        <h2 className="d-flex align-self-md-start subtitulo">Herramientas:</h2>
                        <div className="d-flex flex-wrap justify-content-center justify-content-md-start cont2">
                            <img className="logo" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
                            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="" />
                            <img className="logo " src={github} alt="" />
                            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" alt="" />
                            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="spacer layer3"></div>
        </>
    )
}
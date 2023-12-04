import "./About.css"

export const About = () => {
    return (
        <>
            <div className="about">
                <div className="about-section">
                    <div className="container">
                        <h1 id="about-title">¡Hola!</h1>
                        <div className="d-flex align-items-center flex-column">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div className="img-perfil d-flex justify-content-center">
                                    <img src={require("../docs/WhatsApp Image 2023-10-25 at 14.24.13.jpeg")} alt="" />
                                </div>
                            </div>

                            <div className="col-md-6 d-flex textDiv justify-content-end">
                                <p className="texto-about"> Soy Leandro, me dedico al desarrollo de aplicaciones web. Estudié en Coderhouse la carrera de desarrollo Full Stack, especializandome en Node.js, Express, MongoDB y React.js.
                                    Busco incursionarme en el ámbito laboral de la programación con el objetivo de lograr un crecimiento profesional, adquirir conocimientos y experiencia.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import "./Proyectos.css"
import React, { useEffect } from 'react';
import DOTS from 'vanta/src/vanta.dots'

export const Proyectos = () => {


    useEffect(() => {
        DOTS({
            el: '#dots',
            mouseControls: true,
            touchControls: false,
            gyroControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xFA7268,
            backgroundColor: 0x181E2E,
            showLines: false,
            spacing: 20,
            size: 1
        })
    }, [])

    return (
        <>

            <div className="proyectos-section">
                <div id="dots">
                    <div className="container">
                        <h1 id="proyectos-title">Proyectos</h1>
                        <div className="d-flex flex-wrap proyectos-container justify-content-center">

                            <div className="col-md-6 col-12  d-flex flex-column justify-content-center align-items-center">
                                <h2 className="proyecto-nombre">e-commerce Full Stack</h2>
                                <div className="d-flex justify-content-center align-items-center cont-proyecto">
                                    <div className="overlay d-flex justify-content-center align-items-center">
                                        <a className="boton boton-proyecto" href="http://44.219.28.110:4040/products">Abrir</a>
                                        <a className="boton boton-proyecto" target="_blank" rel="noreferrer" href="https://github.com/LeandroMore1/entregable-final-backend">Ver repo</a>
                                    </div>
                                    <img src={require('../docs/backend.png')} className="img" alt="" />
                                </div>
                            </div>

                            <div className="col-md-6 col-12  d-flex flex-column justify-content-center align-items-center">
                                <h2 className="proyecto-nombre">e-commerce React</h2>
                                <div className="d-flex justify-content-center align-items-center cont-proyecto">
                                    <div className="overlay d-flex justify-content-center align-items-center">
                                        <a className="boton boton-proyecto" target="_blank" rel="noreferrer" href="https://leandromore-react.s3.us-east-2.amazonaws.com/index.html">Abrir</a>
                                        <a className="boton boton-proyecto" target="_blank" rel="noreferrer" href="https://github.com/LeandroMore1/entregable-final-react">Ver repo</a>
                                    </div>
                                    <img src={require('../docs/z-store.png')} className="img" alt="" />
                                </div>
                            </div>

                            <div className="col-md-6 col-12  d-flex flex-column justify-content-center align-items-center">
                                <h2 className="proyecto-nombre">Front End servicio mecánico</h2>
                                <div className="d-flex justify-content-center align-items-center cont-proyecto">
                                    <div className="overlay d-flex justify-content-center align-items-center">
                                        <a className="boton boton-proyecto" target="_blank" rel="noreferrer" href="https://www.talleresyautorepuestosmerida.com/">Abrir</a>
                                        <a className="boton boton-proyecto" target="_blank" rel="noreferrer" href="https://github.com/LeandroMore1/talleres-merida">Ver repo</a>
                                    </div>
                                    <img src={require('../docs/merida.png')} className="img" alt="" />
                                </div>
                            </div>

                            <div className="col-md-6 col-12  d-flex flex-column justify-content-center align-items-center">
                                <h2 className="proyecto-nombre">Front End Automotriz</h2>
                                <div className="d-flex justify-content-center align-items-center cont-proyecto">
                                    <div className="overlay d-flex justify-content-center align-items-center">
                                        <a className="boton boton-proyecto" target="_blank" rel="noreferrer" href="https://leandromore1.github.io/gestoria-automotriz/">Abrir</a>
                                        <a className="boton boton-proyecto" target="_blank" rel="noreferrer" href="https://github.com/LeandroMore1/gestoria-automotriz">Ver repo</a>
                                    </div>
                                    <img src={require('../docs/gestoria.png')} className="img" alt="" />
                                </div>
                            </div>

                            <div className="col-md-6 col-12  d-flex flex-column justify-content-center align-items-center">
                                <h2 className="proyecto-nombre">Front End Museo</h2>
                                <div className="d-flex justify-content-center align-items-center cont-proyecto">
                                    <div className="overlay d-flex justify-content-center align-items-center">
                                        <a className="boton boton-proyecto" target="_blank" rel="noreferrer" href="https://leandromore1.github.io/entregable-final-html-y-css/">Abrir</a>
                                        <a className="boton boton-proyecto" target="_blank" rel="noreferrer" href="https://github.com/LeandroMore1/entregable-final-html-y-css">Ver repo</a>
                                    </div>
                                    <img src={require('../docs/museo.png')} className="img" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

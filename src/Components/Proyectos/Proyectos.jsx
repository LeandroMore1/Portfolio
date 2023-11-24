import "./Proyectos.css"
import React, { useEffect } from 'react';
import DOTS from 'vanta/src/vanta.dots'

export const Proyectos = () => {


    useEffect(() => {
        DOTS({
            el: '#proyectos',
            mouseControls: true,
            touchControls: true,
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
            <div id="proyectos">
                <div className="container">
                    <h1 id="proyectos-title">Proyectos</h1>
                    <div className="d-flex flex-wrap proyectos-container">
                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                            <h2>e-commerce Full Stack</h2>
                            <a href="http://35.171.60.146/products"><img src="" alt="" /></a>
                        </div>
                        <div className="col-md-6  d-flex flex-column justify-content-center align-items-center">
                            <h2>e-commerce React</h2>
                            <a href=""><img src="" alt="" /></a>
                        </div>
                        <div className="col-md-6  d-flex flex-column justify-content-center align-items-center">
                            <h2>Front End automotriz</h2>
                            <a href=""><img src="" alt="" /></a>
                        </div>
                        <div className="col-md-6  d-flex flex-column justify-content-center align-items-center">
                            <h2>Front End automotriz</h2>
                            <a href=""><img src="" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
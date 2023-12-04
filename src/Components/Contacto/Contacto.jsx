import "./Contacto.css"
import { Icon } from '@iconify/react';

export const Contacto = () => {
    return(
        <>
        <div className="contact-section">
        <h1 id="contact-title">Contacto</h1>
            <div className="container d-flex flex-wrap">
                <div className="col-sm-4 col-12  contact-cols">
                    <div className="d-flex justify-content-center flex-column align-items-center">
                    <a href="mailto: manumore42@gmail.com"><Icon className="icono-contacto" icon="tabler:mail-filled" color="#2c2c4f" /></a>
                    <a href="mailto: manumore42@gmail.com"><p>manumore42@gmail.com</p></a>
                    </div>
                </div>
                <div className="col-sm-4 col-12 contact-cols">
                    <div className="d-flex justify-content-center flex-column align-items-center">
                    <a href="tel:+5491173611309"><Icon className="icono-contacto" icon="mingcute:phone-fill" color="#2c2c4f" /></a>
                    <a href="tel:+5491173611309"><p>11-7361-1309</p></a>
                    <a href="tel:+5491151517072"><p id="second-num">11-5151-7072</p></a>
                    </div>
                </div>
                <div className="col-sm-4 col-12 contact-cols lastCol">
                    <div className="d-flex justify-content-center align-items-center">
                    <a  target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leandro-more-2067a4171/"><Icon className="icono-contacto" icon="mdi:linkedin" color="#2c2c4f"/></a>
                    <a target="_blank" rel="noreferrer"  href="https://github.com/LeandroMore1"><Icon className="icono-contacto" icon="mdi:github" color="#2c2c4f" /></a>
                    <a href="https://wa.me/5491173611309"><Icon className="icono-contacto" icon="ic:sharp-whatsapp" color="#2c2c4f"/></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
import React from "react";

const Footer = () => {
    return(
        <div className="container-footer space-between">
            <footer className="intern-container-footer">
                <div>
                    <h2 className="h2">Asistencia</h2>
                    <ul className="listas">
                        <li><a href="/">Centro de ayuda</a></li>
                        <li>Opciones de cancelación</li>
                        <li>Gestiona tus viajes</li>
                        <li>Centro de recursos sobre seguridad</li>
                    </ul>
                </div>
                <div>
                    <h2 className="h2">Terminos y condiciones</h2>
                    <ul className="listas">
                        <li>Privacidad y cookies</li>
                        <li>Condiciones del servicio</li>
                        <li>Declaración de accesibilidad</li>
                    </ul>
                </div>
                <div>
                    <h2 className="h2">Información</h2>
                    <ul className="listas">
                        <li><a href="/">Sobre EcuaRun</a></li>
                        <li>Sostenibilidad</li>
                    </ul>
                </div>
            </footer>
            <div className="container-logo">
                <img 
                src='/Assets/Logos/favicon-32x32.png' 
                alt="Logo EcuaRun"
                className="logo" 
                />
            </div>
        </div>
    );
}

export default Footer;
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import logo from "./logo.svg";
import "./App.css";
import particlesOptions from "./particles.json";

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, [init]);

    return (
        <div >
            <div id="particles-div">{init && <Particles options={particlesOptions} id="tsparticles"/>}</div>
                <header>
                    <div className="logo">
                        <div className="logo-nav">
                            <a href="/" className="imagen"><img src={logo} alt="logo" /></a>
                        </div>
                        <nav className="navbar">
                            <ul className="nav-links">
                                <li><a href="/">Inicio</a></li>
                                <li><a href="/about">Sobre nosotros</a></li>
                                <li><a href="/events">Eventos</a></li>
                                <li><a href="/contact">Contáctanos</a></li>
                                <li><a href="/join">Únete</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
        </div>
    );
}

export default App;

import { useState, useEffect } from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                <h1>Jikan API</h1>
            </div>
            <div className={`navbar-links ${scrolling ? 'scrolled-links' : ''}`}>
                <a href="/">Inicio</a>
                <a href="https://jikan.moe/" target="_blank" rel="noopener noreferrer">Sobre Nosotros</a>
                <a href="#contact">Contacto</a>
            </div>
            <div className={`navbar-search ${scrolling ? 'visible' : ''}`}>
                <input type="text" placeholder="Buscar Anime..." />
            </div>
        </nav>
    );
};

export default NavBar;
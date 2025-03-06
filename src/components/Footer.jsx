import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer id="contact">
            <div className="footer-content">
                <p>Visítanos en:</p>
                <div className="footer-links">
                    <a href="https://jkanime.net/" target="_blank" rel="noopener noreferrer">JKAnime</a>
                    <a href="https://animeflv.net/" target="_blank" rel="noopener noreferrer">AnimeFLV</a>
                    <a href="https://www.crunchyroll.com/es/" target="_blank" rel="noopener noreferrer">Crunchyroll</a>
                </div>
            </div>
        
        </footer>
    );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <hr className="footer__line"/>
                <div className="footer__bottom">
                    <p className="footer__copyright">© 2023</p>
                    <div className="footer__link-wrapper">
                        <Link to="/https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</Link>
                        <Link to="/https://github.com/Alex-De-Vep" className="footer__link">Github</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
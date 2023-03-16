import React from 'react';
import { Link } from 'react-router-dom';
import linkArrow from '../../images/link_arrow.svg';

function Portfolio() {
    return (
        <div className="section">
            <div className="section__container section__container_margin_bottom">
                <div className="portfolio">
                    <p className="portfolio__title">
                        Портфолио
                    </p>
                    <ul className="portfolio__list">
                        <li className="portfolio__item">
                            <Link className="portfolio__link" to="">
                                Статичный сайт
                                <img src={linkArrow} className="portfolio__link-arrow" alt="стрелка"/>
                            </Link>
                        </li>
                        <li className="portfolio__item">
                            <Link className="portfolio__link" to="">
                                Адаптивный сайт
                                <img src={linkArrow} className="portfolio__link-arrow" alt="стрелка"/>
                            </Link>
                        </li>
                        <li className="portfolio__item">
                            <Link className="portfolio__link" to="">
                                Одностраничное приложение
                                <img src={linkArrow} className="portfolio__link-arrow" alt="стрелка"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
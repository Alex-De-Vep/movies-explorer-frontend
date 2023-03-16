import React from 'react';
import { Link } from 'react-router-dom';
import photoMe from '../../images/about_me.jpg';

function AboutMe() {
    return (
        <div className="section">
            <div className="section__container section__container_margin_min">
                <h2 className="section__title">Студент</h2>
                <hr className="section__line"/>
                <div className="about-me">
                    <div className="about-me__text">
                        <p className="about-me__title">Алексей</p>
                        <p className="about-me__career">Фронтенд-разработчик, 23 года</p>
                        <p className="about-me__description">
                            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                        </p>
                        <Link className="about-me__link" to="">Github</Link>
                    </div>
                    <img className="about-me__image" src={photoMe} alt="Фото Алексея"/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
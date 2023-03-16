import React from 'react';

function AboutProject() {
    return (
        <section className="section">
            <div className="section__container">
                <h2 className="section__title">О проекте</h2>
                <hr className="section__line"/>
                <div className="about-project">
                    <ul className="about-project__list">
                        <li className="about-project__item">
                            <p className="about-project__title">
                                Дипломный проект включал 5 этапов
                            </p>
                            <p className="about-project__description">
                                Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                            </p>
                        </li>
                        <li className="about-project__item">
                            <p className="about-project__title">
                                На выполнение диплома ушло 5 недель
                            </p>
                            <p className="about-project__description">
                                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                            </p>
                        </li>
                    </ul>
                    <div className="about-project__calendar">
                        <div className="about-project__time">
                            <p className="about-project__line about-project__line_accent_color">1 неделя</p>
                            <p className="about-project__direction">Back-end</p>
                        </div>
                        <div className="about-project__time">
                            <p className="about-project__line">4 недели</p>
                            <p className="about-project__direction">Front-end</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
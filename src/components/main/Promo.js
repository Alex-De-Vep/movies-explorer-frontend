import React from 'react';
import promoImage from "../../images/promo_words.svg";
import { Link } from 'react-router-dom'

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__text">
                    <h1 className="promo__title">
                        Учебный проект студента факультета <br className="promo__delimiter"/>Веб-разработки.
                    </h1>
                    <p className="promo__description">
                        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                    </p>
                    <Link to="/" className="promo__button">Узнать больше</Link>
                </div>
                <img className="promo__image" src={promoImage} alt="Промо изображение"/>
            </div>
        </section>
    );
}

export default Promo;

import React, { useState } from 'react';
import {NavLink, Link} from "react-router-dom";
import account from "../images/account.svg";
import iconClose from "../images/close.svg";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

function MobileMenu({onClose}) {
    let [actionSelector, setActionSelector] = useState(true);
    const [isDropdownShowing, setIsDropdownShowing] = useState(true);

    isDropdownShowing ? disableBodyScroll(document) : enableBodyScroll(document);

    const closeMobileMenu = () => {
        setActionSelector(false);
        setIsDropdownShowing(false);
        setTimeout(() => {
            onClose();
        }, 400)
    }

    const toggleMobileMenu = ({target, currentTarget}) => {
        if (target === currentTarget) {
            closeMobileMenu();
        }
    }

    return (
        <div className={`mobile-menu ${actionSelector ? 'mobile-menu_active' : 'mobile-menu_close'}`} onClick={toggleMobileMenu}>
            <div className="mobile-menu__container">
                <button className="mobile-menu__close-button" onClick={closeMobileMenu}>
                    <img src={iconClose} className="mobile-menu__close-icon" alt="Иконка закрытия"/>
                </button>
                <ul className="mobile-menu__list">
                    <li className="mobile-menu__item">
                        <NavLink to="/" className="mobile-menu__link">Главная</NavLink>
                    </li>
                    <li className="mobile-menu__item">
                        <NavLink to="/movies" className="mobile-menu__link">Фильмы</NavLink>
                        <hr className="mobile-menu__link-line"/>
                    </li>
                    <li className="mobile-menu__item">
                        <NavLink to="/saved-movies" className="mobile-menu__link">Сохранённые фильмы</NavLink>
                    </li>
                </ul>
                <div className="mobile-menu__account">
                    <Link className="account" to="/profile">
                        Аккаунт
                        <span className="account__logo-wrapper">
                            <img className="account__logo" src={account} alt="Иконка аккаунта"/>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;
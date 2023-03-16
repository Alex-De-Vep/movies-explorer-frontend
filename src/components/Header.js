import React from 'react';
import logo from "../images/logo.svg";
import account from "../images/account.svg";
import burger from "../images/burger.svg";
import {Link, NavLink, useLocation} from 'react-router-dom'

function Header({handleMobileMenu}) {
    let location = useLocation();

    return (
        <header className={`header ${location.pathname === '/' ? 'header_promo' : ''}`}>
            <div className="header__container">
                <div className="header__nav">
                    <NavLink to="/">
                        <img className="header__logo" src={logo} alt="Логотип beat film" />
                    </NavLink>
                    <ul className="header__list header__list_hidden">
                        <li className="header__item">
                            <NavLink to="/movies" className="header__nav-link header__nav-link_accent">Фильмы</NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink to="/saved-movies" className="header__nav-link">Сохранённые фильмы</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="header__auth">
                    <button className="header__menu" onClick={handleMobileMenu}>
                        <img className="header__burger" src={burger} alt="иконка мобильного меню"/>
                    </button>
                    <div className="header__account">
                        <Link to="/profile" className="account account_hidden">
                            Аккаунт
                            <span className="account__logo-wrapper">
                                <img className="account__logo" src={account} alt="Иконка аккаунта"/>
                            </span>
                        </Link>
                    </div>
                    <NavLink to="/signin" className="header__link">Регистрация</NavLink>
                    <NavLink to="/signup" className="header__button">Войти</NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
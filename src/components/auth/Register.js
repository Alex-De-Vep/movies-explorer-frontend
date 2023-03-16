import React from 'react';
import { Link } from 'react-router-dom'
import logo from "../../images/logo.svg";

function Register() {
    return (
        <div className="auth">
            <div className="auth__container">
                <img className="auth__logo" src={logo} alt="Логотип проекта"/>
                <h1 className="auth__title">Добро пожаловать!</h1>
                <form className="form">
                    <div className="form__top">
                        <label className="form__label">
                            Имя
                            <input className="form__input" type="text"/>
                            <span className="form__input-error">Имя состоит из кирилицы или латиницы</span>
                        </label>
                        <label className="form__label">
                            E-mail
                            <input className="form__input" type="email"/>
                            <span className="form__input-error">Введите ваш email</span>
                        </label>
                        <label className="form__label">
                            Пароль
                            <input className="form__input form__input_error" type="password"/>
                            <span className="form__input-error active">Что-то пошло не так...</span>
                        </label>
                    </div>
                    <div className="form__bottom">
                        <button className="form__button" type="submit">Зарегистрироваться</button>
                        <div className="form__text-wrapper">
                            <p className="form__text">Уже зарегистрированы?&nbsp;
                                <Link to="/signin" className="form__link">Войти</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
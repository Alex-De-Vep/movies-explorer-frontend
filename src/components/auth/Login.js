import React from 'react';
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="auth">
            <div className="auth__container">
                <img className="auth__logo" src={logo} alt="Логотип проекта"/>
                <h1 className="auth__title">Рады видеть!</h1>
                <form className="form">
                    <div className="form__top">
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
                        <button className="form__button" type="submit">Войти</button>
                        <div className="form__text-wrapper">
                            <p className="form__text">Ещё не зарегистрированы?&nbsp;
                                <Link to="/signin" className="form__link">Регистрация</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
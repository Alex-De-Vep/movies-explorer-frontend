import React, {useState} from 'react';
import Header from "./Header";
import MobileMenu from "./MobileMenu";

function Profile() {
    const [openedMobileMenu, setOpenedMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setOpenedMobileMenu(!openedMobileMenu);
    }

    return (
        <div className="page">
            <Header handleMobileMenu={toggleMobileMenu} />
            {openedMobileMenu &&
                <MobileMenu onClose={toggleMobileMenu}/>
            }
            <section className="profile">
                <div className="profile__container">
                    <h1 className="profile__title">Привет, Виталий!</h1>
                    <div className="profile__info">
                        <ul className="profile__list">
                            <li className="profile__item">
                                <p className="profile__text profile__text_wight_medium">Имя</p>
                                <p className="profile__text">Виталий</p>
                            </li>
                            <li className="profile__item">
                                <p className="profile__text profile__text_wight_medium">E-mail</p>
                                <p className="profile__text">pochta@yandex.ru</p>
                            </li>
                        </ul>
                        <div className="profile__bottom">
                            <button className="profile__button">Редактировать</button>
                            <button className="profile__button profile__button_exit">Выйти из аккаунта</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
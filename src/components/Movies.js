import React, { useState } from 'react';
import Header from "./Header";
import SearchForm from "./movies/SearchForm";
import FilterCheckbox from "./movies/FilterCheckbox";
import MoviesCardList from "./movies/MoviesCardList";
import Footer from "./Footer";

import data from '../utils/movies.json';
import MobileMenu from "./MobileMenu";

function Movies() {
    const [openedMobileMenu, setOpenedMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setOpenedMobileMenu(!openedMobileMenu);
    }

    return (
        <>
            <Header handleMobileMenu={toggleMobileMenu} />
            {openedMobileMenu &&
                <MobileMenu onClose={toggleMobileMenu}/>
            }
            <main className="movies">
                <section className="movies__search">
                    <SearchForm />
                    <div className="movies__checkbox">
                        <FilterCheckbox />
                        <p className="movies__checkbox-text">Короткометражки</p>
                    </div>
                </section>
                <section className="movies__card-list">
                    <MoviesCardList data={data} />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Movies;
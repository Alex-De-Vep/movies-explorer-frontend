import React, { useState } from 'react';
import Header from "./Header";
import SearchForm from "./movies/SearchForm";
import FilterCheckbox from "./movies/FilterCheckbox";
import MoviesCardList from "./movies/MoviesCardList";
import Footer from "./Footer";

import data from '../utils/savedMovies.json';

function SavedMovies() {
    const [isSaved] = useState(true);

    return (
        <>
            <Header/>
            <main className="movies">
                <section className="movies__search">
                    <SearchForm />
                    <div className="movies__checkbox">
                        <FilterCheckbox />
                        <p className="movies__checkbox-text">Короткометражки</p>
                    </div>
                </section>
                <section className="movies__card-list">
                    <MoviesCardList data={data} saved={isSaved} />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
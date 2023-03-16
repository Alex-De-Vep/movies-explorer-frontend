import React from 'react';
import iconSearch from "../../images/search.svg";

function SearchForm() {
    return (
        <form className="search-form">
            <input type="text" className="search-form__input" placeholder="Фильм"/>
            <button type="button" className="search-form__button">
                <img className="search-form__icon" src={iconSearch} alt="Иконка поиска"/>
            </button>
        </form>
    );
}

export default SearchForm;
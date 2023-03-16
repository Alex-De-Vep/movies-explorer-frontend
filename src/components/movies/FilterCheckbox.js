import React, { useState } from 'react';

function FilterCheckbox() {
    const [shortFilm, setShortFilm] = useState(true);

    const changeTypeFilm = () => {
        setShortFilm(!shortFilm);
    }

    return (
        <div className="filter-checkbox">
            <input className="filter-checkbox__input" onChange={changeTypeFilm} value={shortFilm} type="checkbox" id="filter" />
            <label className="filter-checkbox__label" htmlFor="filter"></label>
        </div>
    );
}

export default FilterCheckbox;
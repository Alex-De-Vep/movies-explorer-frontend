import React, { useState } from 'react';
import MovieCard from "./MovieCard";

function MoviesCardList({data, saved}) {
    const [movies] = useState(data);

    return (
        <div className="card-list">
            <div className="card-list__container">
                <ul className="card-list__list">
                    {movies.length > 0 && movies.map((item) => (
                        <li className="card-list__item" key={item._id}>
                            <MovieCard movie={item} typeSaved={saved}/>
                        </li>
                    ))}
                </ul>
                {movies.length >= 12 &&
                    <div className="card-list__button-wrapper">
                        <button className="card-list__button">Ещё</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default MoviesCardList;
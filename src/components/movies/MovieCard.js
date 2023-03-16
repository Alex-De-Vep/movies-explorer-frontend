import React from 'react';
import iconDelete from '../../images/close.svg';

function MovieCard({movie, typeSaved}) {
    const getTimeFromMins = (mins) => {
        if (mins < 60) {
            return `${mins} м`;
        }

        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return `${hours}ч ${minutes} м`;
    };

    return (
        <div className="movie-card">
            <div className="movie-card__top">
                <div className="movie-card__text-wrapper">
                    <h2 className="movie-card__title">{movie.nameRU}</h2>
                    <p className="movie-card__text">{getTimeFromMins(movie.duration)}</p>
                </div>
                <button className={`movie-card__button ${movie.movieId && !typeSaved ? 'movie-card__button_active' : ''}`}>
                    {typeSaved ?
                        <img src={iconDelete} className="movie-card__icon-remove" alt="Иконка удаления карточки"/> :
                        <svg viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="movie-card__save">
                            <path
                                d="M0.5 1.9C0.5 1.40294 0.902944 1 1.4 1H8.6C9.09706 1 9.5 1.40294 9.5 1.9V12.4789C9.5 12.5552 9.41798 12.6034 9.35133 12.5662L6.21676 10.8198C5.46033 10.3984 4.53968 10.3984 3.78324 10.8198L0.648671 12.5662C0.582015 12.6034 0.5 12.5552 0.5 12.4789V1.9Z"
                                stroke="currentColor"/>
                        </svg>
                    }
                </button>
            </div>
            <div className="movie-card__image-wrapper">
                <img className="movie-card__image" src={movie.image} alt={`Постер фильма ${movie.nameRU}`}/>
            </div>
        </div>
    );
}

export default MovieCard;
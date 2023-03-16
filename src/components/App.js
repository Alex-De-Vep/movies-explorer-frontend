import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from "./auth/Login";
import Register from "./auth/Register";
import Main from "./Main";
import Movies from "./Movies";
import Profile from "./Profile";
import NotFound from "./NotFound";
import SavedMovies from "./SavedMovies";

function App() {

    return (
        <div className="page">
            <Routes>
                <Route path="/signup" element={<Register/>} />

                <Route path="/signin" element={<Login/>} />

                <Route path="/" element={<Main/>} />

                <Route path="/movies" element={<Movies/>} />

                <Route path="/saved-movies" element={<SavedMovies/>} />

                <Route path="/profile" element={<Profile/>} />

                <Route path='*' element={<NotFound />}/>
            </Routes>
        </div>
    );
}

export default App;

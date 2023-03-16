import React from 'react';
import Promo from "./main/Promo";
import AboutProject from "./main/AboutProject";
import Techs from "./main/Techs";
import AboutMe from "./main/AboutMe";
import Portfolio from "./main/Portfolio";
import Footer from "./Footer";
import Header from "./Header";

function Main() {
    return (
        <div className="page">
            <Header/>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default Main;
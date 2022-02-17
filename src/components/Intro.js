/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import picture from "../img/intro.jpeg"

function Intro() {
    return(
        <section id="intro" className="center">
            <div className="home__container">
                <h1 className="home__title">Discover, collect, and sell <br/> extraordinary NFTs</h1>
                <h2 className="home__description">OpenSea is the world's first and <br /> largest NFT marketplace</h2>

                <div className="intro__button">
                    <button className="intro__explore" className="center">Explore</button>
                    <button className="intro__view" className="center">Create</button>
                </div>
            </div>

            <img src={picture} alt="intro" className="intro__photo"></img>
        </section>
    );
}

export default Intro;
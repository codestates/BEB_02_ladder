/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import profile from "../img/profile.jpg"


function Team() {
    return(
        <section id="team" className="center">
            <h1 className="team__title">Team</h1>

            <div className="member__container">
                <div className="member">
                    <img src={profile} className="member__profile"></img>
                    <h2>Name</h2>
                    <div className="member__description"> Leader </div>
                </div>
                <div className="member">
                    <img src={profile} className="member__profile"></img>
                    <h2>Name</h2>
                    <div className="member__description"> Front-end </div>
                </div>
                <div className="member">
                    <img src={profile} className="member__profile"></img>
                    <h2>Name</h2>
                    <div className="member__description"> Back-end </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
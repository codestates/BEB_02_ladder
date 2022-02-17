/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWaterLadder} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return(
        <div className="Navbar">

            <div className="navbar__logo">
                <a href="#">
                <FontAwesomeIcon icon={faWaterLadder} size="2x" />
                OpenSea</a>
            </div>

            <input type="text" className="navbar__search" placeholder="Contract address 입력"></input>

            <button className="navbar__button">search</button>

            <ul className="navbar__menu">
                <li className="navbar__menu__item">Intro</li>
                <li className="navbar__menu__item">Team</li>
                {/* <li className="navbar__menu__item">Create</li> */}
                {/* <li className="navbar__menu__item">View</li> */}
                {/* <li className="navbar__menu__item">Transfer</li> */}
                <li className="navbar__menu__item">MyCollection</li>
            </ul>

            <div className="navbar__connectwallet">
                <a href="" className="">Connect Wallet</a>
            </div>

        </div>
    )
}

export default Navbar;
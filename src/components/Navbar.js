/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWaterLadder} from '@fortawesome/free-solid-svg-icons'
// import erc721Abi from './erc721Abi';
// import TokenList from './components/TokenList';
import Web3 from 'web3';

function Navbar() {
    const [web3, setWeb3] = useState();
    useEffect(()=> {
      if(typeof window.ethereum !== "undefined") {
        try {
          const web = new Web3(window.ethereum);
          setWeb3(web);
        } catch(err) {
          console.log(err);
        }
      }
    }, []);
  
    const [account, setAccount] = useState("");
    const connectWallet = async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    }

    console.log({account});

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
                <li className="navbar__menu__item" >MyCollection</li>
            </ul>

            <div className="navbar__connectwallet">
                <button className="Connect" onClick={()=> {connectWallet();}}>Connect Wallet</button>
            </div>
        </div>
    )
}

export default Navbar;
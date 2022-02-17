import './App.css';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Team from './components/Team';
import MyCollection from './components/MyCollection';
import OpenSeaFunction from './components/OpenSeaFunction';
import erc721Abi from './erc721Abi';
import TokenList from './components/TokenList';
import Web3 from 'web3';

function App() {
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

  return(
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Team></Team>
      <MyCollection></MyCollection>
      <OpenSeaFunction></OpenSeaFunction>
    </div>  
  );
}

export default App;


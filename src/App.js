import Web3 from 'web3'
import React, {useState, useEffect} from 'react';

function App() {
    /*web3설정 */
    const [web3, setWeb3] = useState();
    const [account, setAccount] = useState("");
    useEffect(() => {
      if (typeof window.ethereum !== "undefined") {
        try {
          const web = new Web3(window.ethereum);
          setWeb3(web);
        } catch (err) {
          console.log(err);
        }
      }
    }, []);

    const connectWallet = async () => {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button
                className="metaConnect"
                onClick={() => {
                    connectWallet();
                }}
            >
                connect to MetaMask
            </button>
            <div className="userInfo">주소: {account}</div> 
    </div>
  );
}

export default App;
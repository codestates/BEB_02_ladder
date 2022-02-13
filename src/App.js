import Web3 from 'web3'
import React, {useState, useEffect} from 'react';
import erc721Abi from './erc721Abi';
import TokenList from './components/TokenList';

function App() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");
  const [newErc721addr, setNewErc721Addr] = useState();
  const [erc721list, setErc721list] = useState([]);
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

  const addNewErc721Token = async () => {
      const tokenContract = await new web3.eth.Contract(
        erc721Abi,
        newErc721addr // 0xbcec065a7352f85c4ea2c230fa768f9dac630cdf
      );

      console.log(erc721Abi)
      console.log(newErc721addr)
      const name = await tokenContract.methods.name().call();
	    const symbol = await tokenContract.methods.symbol().call();
      const totalSupply = await tokenContract.methods.totalSupply().call();
      console.log(tokenContract)

      let arr = [];
      for(let i=1; i<=totalSupply; i++) {
        arr.push(i);
      }
      
      for(let tokenId of arr) {
        let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
        if(String(tokenOwner).toLowerCase() === account) {
          let tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
          setErc721list((prevState) => {
            return [...prevState, {name, symbol, tokenId, tokenURI}];
          });
        }
      }
    }
    

return (
  <div className="App">

    <header className="App-header">
      <p>
        test
      </p>
    </header>

    <button 
      className="metaConnect"
      onClick={() => { 
        connectWallet();}}
    >
      connect to MetaMask
    </button>

    <div className="userInfo">주소: {account}</div>

    <div className='newErc721'>
      <input
        type="text"
        onChange={(e) => {
            setNewErc721Addr(e.target.value); }}
	    >
      </input>
    
      <button onClick={addNewErc721Token}> ADD NEW ERC721</button>

      <TokenList 
        web3={web3}
        account={account}
        erc721list={erc721list} />

      
    </div>

  </div>
);
}


export default App;

// 0x5460d9930f0c726c1d9610881e3016f7d03033da : contract address 
// 0x0000000000000000000000000000000000000001 : account2
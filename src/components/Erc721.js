/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import erc721Abi from '../erc721Abi';
import { useState } from 'react';

function Erc721({ web3, account, erc721list }) {
    const [to, setTo] = useState("");
    const sendToken = async (tokenAddr, tokenId) => {
        const tokenContract = await new web3.eth.Contract(
            erc721Abi,
            tokenAddr = "0x5460d9930f0c726c1d9610881e3016f7d03033da", // 임시
            {from:account}
        );
        
        tokenContract.methods
        .transferFrom(account, to, tokenId)
        .send({from:account})
        .on("receipt", (receipt) => {
            setTo("");
        });
    };
    
    return (
        <div className="erc721list">
            {erc721list.map((token) => {
                return (
                    <div className="erc721token">
                        Name: <span className="name">{token.name}</span>(
                        <span className="symbol">{token.symbol}</span>)
                        <div className="nft">id: {token.tokenId}</div>
                        <img src={token.tokenURI} width={300} />

                            <div className='tokenTransfer'> 
                                To: {" "}
                                <input type="text"
                                    valus={to}
                                    onChange={(e) => {
                                        setTo(e.target.value);
                                    }}
                                >
                                </input>
                                
                                <button className='sendErc20Btn'
                                    onClick={sendToken.bind(
                                        this, token.address, token.tokenId
                                    )}
                                >
                                    send Token
                                </button>
                            </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Erc721;
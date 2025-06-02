
import { useState } from 'react';

export default function Home() {
  const [wallet, setWallet] = useState('');
 
  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWallet(accounts[0]);
      // REAL MONEY ACTION: Uncomment when live
      // await fetch('/api/earn', { method: 'POST', body: JSON.stringify({ wallet: accounts[0] }) });
    }
  };

  const mintNFT = () => {
    window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: wallet,
        to: '0x6aF3fB556c57f4d973a3AA7B80Bb5E643e03690e, // YOUR REAL ETH ADDRESS
        value: '0x' + (0.01 * 1e18).toString(16) // $35 equivalent
      }]
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🚀 MODNFTs Marketplace</h1>
      {!wallet ? (
        <button onClick={connectWallet} style={{ padding: '15px', background: 'blue', color: 'white', fontSize: '1.2rem', borderRadius: '8px' }}>
          🔌 CONNECT WALLET (EARN $1)
        </button>
      ) : (
        <>
          <p>Connected: {wallet.slice(0,6)}...{wallet.slice(-4)}</p>
          <button onClick={mintNFT} style={{ padding: '15px', background: 'green', color: 'white', marginTop: '20px', fontSize: '1.2rem', borderRadius: '8px' }}>
            🖼️ MINT NFT (YOU GET $35)
          </button>
        </>
      )}
    </div>
  );
} 

import React, { createContext, useContext, useState } from 'react';
import { PublicKey } from '@solana/web3.js';

const WalletContext = createContext<any>(null);

export const AppWalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wallet, setWallet] = useState<any>(null);

  return (
    <WalletContext.Provider value={{ wallet, setWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);

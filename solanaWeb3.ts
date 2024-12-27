import { Connection, PublicKey, SystemProgram, Transaction, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';

// Set up the Solana connection
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

// Helper function to get balance of a wallet
export const getBalance = async (publicKey: string) => {
  const walletPublicKey = new PublicKey(publicKey);
  const balance = await connection.getBalance(walletPublicKey);
  return balance / LAMPORTS_PER_SOL; // Convert lamports to SOL
};

// Send Solana payment function
export const sendSol = async (fromWallet: any, toAddress: string, amount: number) => {
  const fromPublicKey = fromWallet.publicKey;
  const toPublicKey = new PublicKey(toAddress);

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromPublicKey,
      toPubkey: toPublicKey,
      lamports: amount * LAMPORTS_PER_SOL, // Convert SOL to lamports
    })
  );

  const signature = await fromWallet.sendTransaction(transaction, connection);
  await connection.confirmTransaction(signature, 'confirmed');
  return signature;
};

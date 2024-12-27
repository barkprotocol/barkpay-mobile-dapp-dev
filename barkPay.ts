import * as barkPay from '@solana/pay';
import { PublicKey } from '@solana/web3.js';

// Function to create a payment URL
export const createPaymentUrl = (recipientPublicKey: string, amount: number) => {
  const recipient = new PublicKey(recipientPublicKey);

  const url = barkPay.createTransactionUrl({
    recipient,
    amount,
  });

  return url;
};

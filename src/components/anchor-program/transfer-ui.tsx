import React, { useCallback, useState } from "react";
import { Button, View } from "react-native";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";

import {
  transact,
  Web3MobileWallet,
} from "@solana-mobile/mobile-wallet-adapter-protocol-web3js";
import { useAuthorization } from "../../utils/useAuthorization";
import { UsebarkPayAppProgram } from "../../utils/useBarkPayAppProgram";
import { CashApp } from "../../barkpay-app-program/types/barkpay_app";
import { alertAndLog } from "../../utils/alertAndLog";
import { Program } from "@coral-xyz/anchor";
import { TextInput } from "react-native-paper";
import * as anchor from "@coral-xyz/anchor";
import { getDomainKeySync } from "@bonfida/spl-name-service";

type signCashApp = Readonly<{ user: PublicKey }>;

export default function DepositFunds({ user }: signCashApp) {
  const [genInProgress, setGenInProgress] = useState(false);
  const [amount, setAmount] = useState(new anchor.BN(0));
  const [userName, setUserName] = useState(new anchor.BN(0));
  const newAmount = new anchor.BN(amount * 1000000000);

  const [connection] = useState(
    () => new Connection("https://api.devnet.solana.com")
  );
  const { authorizeSession, selectedAccount } = useAuthorization();
  const { barkPayAppProgram, barkPayAppPDA } = UsebarkPayAppProgram(user);

  const depositFunds = useCallback(
    async (program: Program<CashApp>) => {
      let signedTransactions = await transact(
        async (wallet: Web3MobileWallet) => {
          const [authorizationResult, latestBlockhash] = await Promise.all([
            authorizeSession(wallet),
            connection.getLatestBlockhash(),
          ]);

          const { pubkey } = getDomainKeySync(userName);

          // Generate the increment ix from the Anchor program
          const incrementInstruction = await program.methods
            .transferFunds(pubkey, newAmount)
            .accounts({
              user: authorizationResult.publicKey,
              fromCashAccount: barkPayAppPDA,
            })
            .instruction();

          const incrementTransaction = new Transaction({
            ...latestBlockhash,
            feePayer: authorizationResult.publicKey,
          }).add(incrementInstruction);

          // Sign a transaction and receive
          const signedTransactions = await wallet.signTransactions({
            transactions: [incrementTransaction],
          });

          return signedTransactions[0];
        }
      );

      let txSignature = await connection.sendRawTransaction(
        signedTransactions.serialize(),
        {
          skipPreflight: true,
        }
      );

      const confirmationResult = await connection.confirmTransaction(
        txSignature,
        "confirmed"
      );

      if (confirmationResult.value.err) {
        throw new Error(JSON.stringify(confirmationResult.value.err));
      } else {
        console.log("Transaction successfully submitted!");
      }
    },
    [authorizeSession, connection, barkPayAppPDA]
  );

  return (
    <>
      <View style={{ padding: 20 }}>
        <TextInput
          label="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          mode="outlined"
          style={{ marginBottom: 20, backgroundColor: "#f0f0f0" }}
        />
      </View>
      <Button
        title="Deposit Funds"
        disabled={genInProgress}
        onPress={async () => {
          if (genInProgress) {
            return;
          }
          setGenInProgress(true);
          try {
            if (!barkPayAppProgram || !selectedAccount) {
              console.warn(
                "Program/wallet is not initialized yet. Try connecting a wallet first."
              );
              return;
            }
            const deposit = await depositFunds(barkPayAppProgram);

            alertAndLog(
              "Funds deposited into cash account ",
              "See console for logged transaction."
            );
            console.log(deposit);
          } finally {
            setGenInProgress(false);
          }
        }}
      />
    </>
  );
}

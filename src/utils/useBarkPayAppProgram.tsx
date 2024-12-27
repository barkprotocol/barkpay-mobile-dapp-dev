import { Program } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { useMemo, useState } from "react";

import { CashApp, IDL } from "../barkpay-app-program/types/barkpay_app";
import { useQuery } from "@tanstack/react-query";

export function UsebarkPayAppProgram(user: PublicKey) {
  const barkPayAppProgram = new PublicKey(
    "2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg"
  );

  const [connection] = useState(
    () => new Connection("https://api.devnet.solana.com")
  );

  const [barkPayAppPDA] = useMemo(() => {
    const counterSeed = user.toBuffer();
    return PublicKey.findProgramAddressSync([counterSeed], barkPayAppProgram);
  }, [barkPayAppProgram]);

  // const provider = useMemo(() => {
  //   if (!anchorWallet) {
  //     return null;
  //   }
  //   return new AnchorProvider(connection, anchorWallet, {
  //     preflightCommitment: "confirmed",
  //     commitment: "processed",
  //   });
  // }, [anchorWallet, connection]);

  const barkPayAppProgram = useMemo(() => {
    return new Program<CashApp>(IDL, barkPayAppProgram, { connection });
  }, [barkPayAppProgram]);

  const value = useMemo(
    () => ({
      barkPayAppProgram: barkPayAppProgram,
      barkPayAppProgram: barkPayAppProgram,
      barkPayAppPDA: barkPayAppPDA,
    }),
    [barkPayAppProgram, barkPayAppProgram, barkPayAppPDA]
  );

  const friends = useQuery({
    queryKey: [
      "cash_account",
      "fetch",
      { endpoint: connection.rpcEndpoint, user },
    ],
    queryFn: () => barkPayAppProgram.account.cashAccount.fetch(user),
  });

  return { value, friends, barkPayAppProgram, barkPayAppPDA };
}

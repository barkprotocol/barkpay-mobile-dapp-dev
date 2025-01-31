export type CashApp = {
  version: "0.1.0";
  name: "barkpay_app";
  instructions: [
    {
      name: "initializeAccount";
      accounts: [
        {
          name: "cashAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "depositFunds";
      accounts: [
        {
          name: "cashAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "withdrawFunds";
      accounts: [
        {
          name: "cashAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "transferFunds";
      accounts: [
        {
          name: "fromCashAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "user";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "recipientKey";
          type: "publicKey";
        },
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "addFriend";
      accounts: [
        {
          name: "cashAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "pubkey";
          type: "publicKey";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "cashAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "balance";
            type: "u64";
          },
          {
            name: "user";
            type: "publicKey";
          },
          {
            name: "friends";
            type: {
              vec: "publicKey";
            };
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "InvalidAmount";
      msg: "The provided amount must be greater than zero.";
    },
    {
      code: 6001;
      name: "InsufficientFunds";
      msg: "Insufficient funds to perform the transfer.";
    },
    {
      code: 6002;
      name: "Overflow";
      msg: "An overflow occurred in the balance calculation.";
    }
  ];
};

export const IDL: CashApp = {
  version: "0.1.0",
  name: "barkpay_app",
  instructions: [
    {
      name: "initializeAccount",
      accounts: [
        {
          name: "cashAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "depositFunds",
      accounts: [
        {
          name: "cashAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "withdrawFunds",
      accounts: [
        {
          name: "cashAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "transferFunds",
      accounts: [
        {
          name: "fromCashAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "user",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "recipientKey",
          type: "publicKey",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "addFriend",
      accounts: [
        {
          name: "cashAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "pubkey",
          type: "publicKey",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "cashAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "balance",
            type: "u64",
          },
          {
            name: "user",
            type: "publicKey",
          },
          {
            name: "friends",
            type: {
              vec: "publicKey",
            },
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidAmount",
      msg: "The provided amount must be greater than zero.",
    },
    {
      code: 6001,
      name: "InsufficientFunds",
      msg: "Insufficient funds to perform the transfer.",
    },
    {
      code: 6002,
      name: "Overflow",
      msg: "An overflow occurred in the balance calculation.",
    },
  ],
};

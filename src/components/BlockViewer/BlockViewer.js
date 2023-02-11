import { useState } from "react";
import Blocks from "./Blocks/Blocks";
import Transactions from "./Transactions/Transactions";

const BLOCKCHAIN_DATA = {
  reward: 100,
  difficulty: 2,
  chain: [
    {
      hash: "05376de3807a79c650633964f49a34cccbf68423502a3f3c9e0793642f1ad3e4",
      prevHash:
        "cd1e9d208d0fa58d3e323758f9d59ed4fdc19e2292203cf18a9c34f2c032e182",
      nonce: 23,
      timestamp: 1483228800000,
      transactions: [
        {
          id: 1,
          from: "System",
          to: "John",
          amount: 25,
          time: 1676059901858,
          isValid: true,
        },
        {
          id: 2,
          from: "John",
          to: "Steven",
          amount: 10,
          time: 1483228800000,
          isValid: true,
        },
      ],
      pendingTransactions: [],
    },
    {
      hash: "AEi6qS3ekt7hmf9fkWWbsgLnSJx58sEVfwq1o38Sw561",
      prevHash:
        "05376de3807a79c650633964f49a34cccbf68423502a3f3c9e0793642f1ad3e4",
      nonce: 3,
      timestamp: 1676059901858,
      transactions: [
        {
          id: 1,
          from: "System",
          to: "John",
          amount: 100,
          time: 1676059901858,
          isValid: true,
        },
        {
          id: 2,
          from: "Steven",
          to: "John",
          amount: 5,
          time: 1483228800000,
          isValid: true,
        },
      ],
      pendingTransactions: [],
    },
  ],
};

const BlockViewer = () => {
  const txns = BLOCKCHAIN_DATA.chain[0].transactions;
  const chain = BLOCKCHAIN_DATA.chain;
  const [block, setBlock] = useState(txns);
  const showBlockTxns = () => {
    setBlock(BLOCKCHAIN_DATA.chain[1].transactions);
  };

  return (
    <>
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-medium leading-6 text-gray-900">
          Blocks on chain
        </h2>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          Each card represents a block on the chain. Click on a block to see the
          transactions stored inside.
        </p>
      </div>
      <Blocks onClick={showBlockTxns} chain={chain} />
      <Transactions txns={block} />
    </>
  );
};

export default BlockViewer;

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { mineTransactions } from "../../services/blockchainService";
import BlockContext from "../../store/block-context";
import Transactions from "../BlockViewer/Transactions/Transactions";

const PendingTransactions = () => {
  const blockContext = useContext(BlockContext);
  const navigate = useNavigate();
  const startMining = () => {
    mineTransactions();
    blockContext.loadPending();
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="border-b border-gray-200 pb-5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Pending transactions
          </h2>
          <p className="mt-2 max-w-4xl text-sm text-gray-500">
            These transactions are waiting to be included in the next block.
            Next block is created when you start the mining process.
          </p>
        </div>
        <button
          onClick={startMining}
          className="h-1/2 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-md font-bold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Start mining
        </button>
      </div>
      <Transactions title={false} txns={blockContext.pendingTransactions} />
    </>
  );
};

export default PendingTransactions;

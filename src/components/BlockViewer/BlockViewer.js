import Blocks from "./Blocks/Blocks";
import Transactions from "./Transactions/Transactions";

const BlockViewer = () => {
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
      <Blocks />
      <Transactions />
    </>
  );
};

export default BlockViewer;

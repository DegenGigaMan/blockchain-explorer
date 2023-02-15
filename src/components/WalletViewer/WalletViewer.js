import Transactions from "../BlockViewer/Transactions/Transactions";

const WalletViewer = () => {

  return (
    <div>
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-medium leading-6 text-gray-900">
          Wallet
        </h2>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          degengigaman.sol
        </p>
      </div>
      <Transactions title={false}/>
    </div>
  );
};

export default WalletViewer;

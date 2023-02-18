import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAddressBalance } from "../../services/blockchainService";
import BlockContext from "../../store/block-context";
import Transactions from "../BlockViewer/Transactions/Transactions";

const WalletViewer = () => {
  const params = useParams();
  const context = useContext(BlockContext);
  const [wallet, setWallet] = useState({balance: 0, transactions: []});

  useEffect(() => {
    const balance = getAddressBalance(context.toAddress);
    setWallet(balance);
  }, [context.toAddress]);
  return (
    <div>
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-medium leading-6 text-gray-900">
          Wallet Details
        </h2>
      </div>
      <div className="flex gap-12">
        <div className="mt-4 max-w-4xl text-sm text-gray-500">
          <p className="text-gray-900 text-base font-medium">
            {params.walletId}
          </p>
          Address{" "}
        </div>
        <div className="mt-4 max-w-4xl text-sm text-gray-500">
          <p className="text-gray-900 text-base font-medium">
            {wallet.balance}
          </p>
          Balance{" "}
        </div>
        <div className="mt-4 max-w-4xl text-sm text-gray-500">
          <p className="text-gray-900 text-base font-medium">
            {wallet.transactions.length > 0 && wallet.transactions.length}
          </p>
          Total Txns{" "}
        </div>
      </div>
      <Transactions txns={wallet.transactions} title={true} />
    </div>
  );
};

export default WalletViewer;

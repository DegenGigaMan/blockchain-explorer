import { useParams } from "react-router-dom";

const WalletViewer = () => {
  const params = useParams();

  return (
    <div>
      <h1>Wallet Details</h1>
      <p>Adress</p>
      <p>{params.walletId}</p>
      <p>Balance</p>
      <p>100</p>

      <h1>Transactions</h1>
      <ul>
        <li>
          Txn 1
        </li>
        <li>
          Txn 2
        </li>
      </ul>
    </div>
  );
};

export default WalletViewer;

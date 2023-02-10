import { Link } from "react-router-dom";

const WALLETS = [
  { id: 1, name: "John", balance: 100 },
  { id: 2, name: "Mike", balance: 50 },
  { id: 3, name: "Michael", balance: 250 },
];

const HomePage = () => {
  return (
    <>
      <h1>Blockchain Explorer</h1>

      <ul>
        {WALLETS.map((wallet) => (
          <li key={wallet.id}>
            <p>
              Transaction {wallet.id}: <Link to={`/wallet/${wallet.name}`}>{wallet.name}</Link>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;

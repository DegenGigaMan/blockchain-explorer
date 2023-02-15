import { useLoaderData, json } from "react-router-dom";
import BlockViewer from "../components/BlockViewer/BlockViewer";
import { getBlockchain } from "../services/blockchainService";

const BLOCKCHAIN_DATA = {
  reward: 100,
  difficulty: 2,
  chain: [
    {
      hash: "05376de3807a79c650633964f49a34cccbf68423502a3f3c9e0793642f1ad3e4",
      prevHash:
        "cd1e9d208d0fa58d3e323758f9d59ed4fdc19e2292203cf18a9c34f2c032e182",
      nonce: 1,
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
      nonce: 2,
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

const HomePage = () => {
  const blockchain = useLoaderData();

  return <BlockViewer chain={blockchain} />;
};

export default HomePage;

export const BlockchainLoader = () => {
  //fetch data here
  // const response = fetch('');
  // if(!response){
  //   //handle error
  //   return { isError: true, message: 'Could not fetch data' };
  // } else {
  //   return response;
  // }
  const chain = getBlockchain();
  //console.log(chain);
  if (false) {
    throw json({ message: "Could not fetch blockchain." }, { status: 500 });
  } else {
    //const blockchain = BLOCKCHAIN_DATA.chain;
    return chain;
  }
};

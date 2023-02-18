import { useLoaderData, json } from "react-router-dom";
import BlockViewer from "../components/BlockViewer/BlockViewer";
import { getBlockchain } from "../services/blockchainService";

const HomePage = () => {
  const blockchain = useLoaderData();

  return <BlockViewer reward={blockchain.miningReward} chain={blockchain.chain} />;
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

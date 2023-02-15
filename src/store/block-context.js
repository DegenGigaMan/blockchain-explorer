import { createContext, useState } from "react";
import { getPendingTransactions } from "../services/blockchainService";

const BlockContext = createContext({
  activeBlock: {},
  onSelectBlock: () => {},
  showPending: false,
  onShowPending: () => {},
  pendingTransactions: [],
  loadPending: () => {},

});

export const BlockProvider = (props) => {
  const [selectedBlock, setSelectedBlock] = useState({});
  const [showPending, setShowPending] = useState(false);
  const [pendingTransactions, setPendingTransactions] = useState([]);

  const selectBlockHandler = (block) => {
    //console.log(block);
    setSelectedBlock(block);
  };

  const showPendingHandler = () => {
    setShowPending(true);
  }

  const loadPendingHandler = () => {
    const pendingTxns = getPendingTransactions();
    setPendingTransactions(pendingTxns);
  }

  return (
    <BlockContext.Provider
      value={{
        activeBlock: selectedBlock,
        onSelectBlock: selectBlockHandler,
        onShowPending: showPendingHandler,
        showPending: showPending,
        pendingTransactions: pendingTransactions,
        loadPending: loadPendingHandler,
      }}
    >
      {props.children}
    </BlockContext.Provider>
  );
};

export default BlockContext;

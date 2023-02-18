import { useContext } from "react";
import { Link } from "react-router-dom";
import BlockContext from "../../../../store/block-context";

const Transaction = (props) => {
  let isValidText;
  if (props.transaction.isValid) {
    isValidText = "Yes";
  } else {
    isValidText = "No";
  }
  const address = props.transaction.fromAddress;
  let shortAddress;
  if (address) {
    shortAddress = address.slice(0, 6) + "...";
  } else {
    shortAddress = address;
  }

  const blockContext = useContext(BlockContext);

  const clickHandler = () => {
    blockContext.onWallet(props.transaction.toAddress);
  }

  return (
    <tr>
      <td className="whitespace-nowrap w-10 overflow-hidden py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
        {/*props.transaction.signature*/}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
        {shortAddress}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-blue-500 font-medium">
        <Link onClick={clickHandler} to={`/wallet/${props.transaction.toAddress}`}>
          {props.transaction.toAddress}
        </Link>
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
        {props.transaction.amount}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
        {props.transaction.timestamp}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
        {isValidText}
      </td>
    </tr>
  );
};

export default Transaction;

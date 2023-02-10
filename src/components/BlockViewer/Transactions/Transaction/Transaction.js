import { Link } from "react-router-dom";

const Transaction = (props) => {
  let isValidText;
  if (props.transaction.isValid) {
    isValidText = "Yes";
  } else {
    isValidText = "No";
  }
  return (
    <tr>
      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
        {props.transaction.id}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
        {props.transaction.from}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-blue-500 font-medium">
        <Link to={`/wallet/${props.transaction.to}`}>{props.transaction.to}</Link>
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
        {props.transaction.amount}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
        {props.transaction.time}
      </td>
      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
        {isValidText}
      </td>
    </tr>
  );
};

export default Transaction;

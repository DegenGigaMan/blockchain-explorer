import { useContext } from "react";
import BlockContext from "../../../../store/block-context";

const Block = (props) => {
  const blockContext = useContext(BlockContext);
  let isGenesis;
  if (props.index === 1) {
    isGenesis = true;
  } else {
    isGenesis = false;
  }

  let isActiveStyles = "border border-fuchsia-700";

  const selectBlock = () => {
    blockContext.onSelectBlock({ ...props.block });
  };

  return (
    <div
      onClick={selectBlock}
      className={`"w-72 sm:w-80 bg-white shadow sm:rounded-lg text-left " ${
        false ? isActiveStyles : ""
      }`}
    >
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Block #{props.index} {isGenesis && "(Genesis Block)"}
        </h3>
      </div>
      <div className="overflow-hidden border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Hash</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {props.block.hash}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Timestamp</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {props.block.timestamp}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nonce</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {props.block.nonce}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Reward</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              100
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Previous block hash
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {props.block.prevHash}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Block;

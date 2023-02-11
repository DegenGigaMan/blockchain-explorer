import Block from "./Block/Block";

const Blocks = (props) => {
  const showBlockTxns = () => {
    props.onClick();
  };
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6">
      {props.chain.map((block, index) => (
        <li
          key={block.hash}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <button onClick={showBlockTxns}>
            <Block block={block} index={index + 1} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Blocks;

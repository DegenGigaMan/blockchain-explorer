import Block from "./Block/Block";

const Blocks = (props) => {
  return (
    <ul className="flex flex-nowrap overflow-x-auto px-2 gap-6 py-6">
      {props.chain.map((block, index) => (
        <li key={block.hash} className="rounded-lg">
          <Block reward={props.reward} block={block} index={index + 1} />
        </li>
      ))}
    </ul>
  );
};

export default Blocks;

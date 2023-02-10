import { Link } from "react-router-dom";
import logo from "../../../assets/DeadGod.png";

const Header = () => {
  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="items-center">
            <Link to="/">
              <span className="sr-only">DegenGigaMan</span>
              <img className="inline-block h-10 w-auto rounded-xl" src={logo} alt="logo" />
              <div className="inline-block px-4 font-bold text-xl text-white">DG's Blockchain</div>
            </Link>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              to="/settings"
              className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
            >
              Settings
            </Link>
            <Link
              to="/new-transaction"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Create Transaction
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

// import styles from "./Header.module.css";
// import { NavLink, Link } from "react-router-dom";
// import Card from "../../UI/Card/Card";

// const Header = () => {
//   return (
//     <header className={styles.header}>
//       <Link to="/">
//         <h1>Blockchain Explorer</h1>
//       </Link>
//       <nav>
//         <ul className={styles.list}>
//           <li>
//             <NavLink
//               className={({ isActive }) =>
//                 isActive ? styles.active : undefined
//               }
//               to="/createTxn"
//             >
//               <Card>Create Transaction</Card>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className={({ isActive }) =>
//                 isActive ? styles.active : undefined
//               }
//               to="/settings"
//             >
//               <Card>Settings</Card>
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

export default Header;

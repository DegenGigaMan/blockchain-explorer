import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            to="/createTxn"
          >
            Create Transaction
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;

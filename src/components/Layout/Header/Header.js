import MainNavigation from "./MainNavigation/MainNavigation";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <MainNavigation />
    </header>
  );
};

export default Header;

import Cart from './cart/Cart';
import { FC } from 'react';
import Layout from '../Layout';
import Menu from './menu/Menu';
import Search from './search/Search';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <Search />
      <Cart />
    </header>
  );
};

export default Header;

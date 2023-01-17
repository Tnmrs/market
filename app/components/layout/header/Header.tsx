import { FC, useEffect, useState } from 'react';

import Cart from './cart/Cart';
import Menu from './menu/Menu';
import Search from './search/Search';
import styles from './Header.module.scss';

const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', onScroll);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', onScroll);
      }
    };
  }, []);
  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Menu />
      <Search />
      <Cart />
    </header>
  );
};

export default Header;

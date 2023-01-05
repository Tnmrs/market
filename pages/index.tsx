import { Inter } from '@next/font/google';
import Header from '../app/components/layout/header/Header';
import Menu from '../app/components/layout/header/menu/Menu';

import Layout from '../app/components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <Header />;
}

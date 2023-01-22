import Catalog from '@/ui/catalog/Catalog';
import { FC } from 'react';
import Heading from '@/ui/heading/heading';
import Image from 'next/image';
import Layout from '@/layout/Layout';
import { products } from '@//data/product.data';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <Layout
      title="Home"
      description="Мультибрендовый магазин одежды, обуви и аксессуаров премиум класса ➤ интернет-магазин стильной и модной одежды в Москве">
      <Heading className={styles.home}>
        <div className={styles.image}>
          <Image src="/images/logos.png" width={1200} height={960} alt="sneakers" />
        </div>
        <div className={styles.blueBox}></div>
      </Heading>

      <Catalog products={products} />
    </Layout>
  );
};

export default Home;

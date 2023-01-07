import Catalog from '@/ui/catalog/Catalog';
import { FC } from 'react';
import Layout from '@/layout/Layout';
import { products } from '@//data/product.data';

const Home: FC = () => {
  return (
    <Layout
      title="Home"
      description="Мультибрендовый магазин одежды, обуви и аксессуаров премиум класса ➤ интернет-магазин стильной и модной одежды в Москве">
      <Catalog products={products} />
    </Layout>
  );
};

export default Home;

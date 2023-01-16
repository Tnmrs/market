import Catalog from '@/ui/catalog/Catalog';
import { FC } from 'react';
import Heading from '@/ui/heading/heading';
import Layout from '@/layout/Layout';
import { products } from '@//data/product.data';

const Home: FC = () => {
  return (
    <Layout
      title="Home"
      description="Мультибрендовый магазин одежды, обуви и аксессуаров премиум класса ➤ интернет-магазин стильной и модной одежды в Москве">
      <Heading className="text-gray' ml-auto w-2/3 text-right text-6x1 font-black">
        THE NEW COLLECTION IS NOW AVAILABLE!
      </Heading>

      <Catalog products={products} />
    </Layout>
  );
};

export default Home;

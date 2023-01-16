import Breadcrumbs from './product-breadcrumbs/Breadcrumbs';
import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import { IProductDetails } from '@//../pages/product/[slug]';
import Layout from '@/layout/Layout';
import ProductNavigation from './product-navigation/ProductNavigation';

const ProductDetails: FC<IProductDetails> = ({ product }) => {
  return (
    <Layout title={product.name} description={product.description}>
      <Heading className="ml-auto w-2/3 text-right text-6x1 font-black text-gray">
        {product.name}
      </Heading>
      <div>
        <Breadcrumbs product={product} />
        <ProductNavigation productId={product.id} />
      </div>
    </Layout>
  );
};

export default ProductDetails;

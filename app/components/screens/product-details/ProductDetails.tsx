import Breadcrumbs from './product-breadcrumbs/Breadcrumbs';
import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import { IProductDetails } from '@//types/product.interface';
import Layout from '@/layout/Layout';
import ProductCard from './product-card/ProductCard';
import ProductNavigation from './product-navigation/ProductNavigation';

const ProductDetails: FC<IProductDetails> = ({ product }) => {
  return (
    <Layout title={product.name} description={product.description}>
      <Heading>{product.name}</Heading>
      <div>
        <Breadcrumbs product={product} />
        <ProductNavigation productId={product.id} />
      </div>

      <ProductCard product={product} />
    </Layout>
  );
};

export default ProductDetails;

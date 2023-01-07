import Carousel from './carousel/Carousel';
import { FC } from 'react';
import { IProduct } from '@//types/product.interface';

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <div>
      <Carousel products={products} />
    </div>
  );
};

export default Catalog;

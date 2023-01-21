import { FC, useState } from 'react';

import { IProductDetails } from '@//types/product.interface';
import ProductImage from './ProductImage';
import ProductInformation from './ProductInformation';
import ProductVariations from './ProductVariations';
import styles from './ProductCard.module.scss';

const ProductCard: FC<IProductDetails> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <div className={styles.card}>
      <ProductInformation
        product={product}
        currentImageIndex={currentImageIndex}
        setCurrenImageIndex={setCurrentImageIndex}
      />
      <ProductImage product={product} currentImageIndex={currentImageIndex} />
      <ProductVariations product={product} />
    </div>
  );
};

export default ProductCard;

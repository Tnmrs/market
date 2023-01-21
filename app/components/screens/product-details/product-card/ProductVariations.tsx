import { FC, useState } from 'react';

import AddToCartButton from '@/ui/catalog/carousel/carousel-item/AddToCartButton';
import { IProductDetails } from '@//types/product.interface';
import ProductRating from './product-rating/ProductRating';
import SizeVariations from '@/ui/catalog/carousel/carousel-item/SizeVariations';
import { TypeSize } from '@//store/cart/cart.types';
import styles from './ProductCard.module.scss';

const ProductVariations: FC<IProductDetails> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<TypeSize>('42 EU');

  return (
    <div className={styles.variations}>
      <ProductRating product={product} />
      <SizeVariations selectedSize={selectedSize} setSelectedSize={setSelectedSize} productId={0} />
      <AddToCartButton product={product} selectedSize={selectedSize} />
    </div>
  );
};

export default ProductVariations;

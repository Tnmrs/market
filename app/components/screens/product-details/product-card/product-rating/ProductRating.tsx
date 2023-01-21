import { FC, useState } from 'react';

import { IProductDetails } from '@//types/product.interface';
import { Rating } from 'react-simple-star-rating';
import styles from '../ProductCard.module.scss';

const ProductRating: FC<IProductDetails> = ({ product }) => {
  const [rating, setRating] = useState(
    Math.round(
      product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length,
    ) || 0,
  );

  return (
    <div className={styles.rating}>
      <span>Rating:</span>
      <Rating
        initialValue={rating}
        SVGstyle={{
          display: 'inline-block',
        }}
        readonly
        allowFraction
        transition
        size={25}
      />
    </div>
  );
};

export default ProductRating;

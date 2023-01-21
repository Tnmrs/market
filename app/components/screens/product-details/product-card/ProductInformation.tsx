import { Dispatch, FC, SetStateAction } from 'react';

import { IProductDetails } from '@//types/product.interface';
import Image from 'next/image';
import cn from 'clsx';
import styles from './ProductCard.module.scss';

interface IProductInformation extends IProductDetails {
  currentImageIndex: number;
  setCurrenImageIndex: Dispatch<SetStateAction<number>>;
}

const ProductInformation: FC<IProductInformation> = ({
  product,
  currentImageIndex,
  setCurrenImageIndex,
}) => {
  return (
    <div className={styles.information}>
      <h2>{product.name}</h2>
      <div>
        <p>{product.description}</p>
      </div>
      {product.images.map((image, index) => (
        <button
          key={image}
          onClick={() => setCurrenImageIndex(index)}
          className={cn({
            [styles.active]: index == currentImageIndex,
          })}>
          <Image src={image} alt="" width={70} height={70} />
        </button>
      ))}
    </div>
  );
};

export default ProductInformation;

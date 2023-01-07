import { Dispatch, FC, SetStateAction } from 'react';

import { TypeSize } from '@//store/types';
import cn from 'clsx';
import styles from '../Carousel.module.scss';

const SIZES: TypeSize[] = [
  '40.5 EU',
  '41 EU',
  '42 EU',
  '42.5 EU',
  '43 EU',
  '44 EU',
  '44.5 EU',
  '45 EU',
  '46 EU',
  '47 EU',
];

interface ICarouselVariations {
  productId: number;
  selectedSize: TypeSize;
  setSelectedSize: Dispatch<SetStateAction<TypeSize>>;
}

const CarouselVariations: FC<ICarouselVariations> = ({ selectedSize, setSelectedSize }) => {
  return (
    <div className={styles.variations}>
      {SIZES.map((size) => (
        <button
          key={size}
          className={cn({
            [styles.active]: selectedSize == size,
          })}
          onClick={() => setSelectedSize(size)}>
          {size}
        </button>
      ))}
    </div>
  );
};

export default CarouselVariations;

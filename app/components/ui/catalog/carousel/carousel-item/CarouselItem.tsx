import { FC, useState } from 'react';

import CarouselButton from './CarouselButton';
import CarouselVariations from './CarouselVariations';
import { IProduct } from '@//types/product.interface';
import Image from 'next/image';
import { TypeSize } from '@//store/types';
import cn from 'clsx';
import styles from '../Carousel.module.scss';

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<TypeSize>('42 EU');
  const isActive = product.id == 2;

  return (
    <div
      className={cn(styles.item, {
        [styles.active]: isActive,
      })}>
      <div>
        <Image
          className={styles.image}
          alt={product.name}
          src={product.images[0]}
          width={230}
          height={240}
        />
        <div className={styles.heading}>
          <div>{product.name}</div>
        </div>

        {isActive ? (
          <>
            <CarouselVariations
              productId={product.id}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <CarouselButton product={product} selectedSize={selectedSize} />
          </>
        ) : (
          <div className={styles.description}>{product.description}</div>
        )}
      </div>
    </div>
  );
};

export default CarouselItem;

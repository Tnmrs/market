import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Dispatch, FC, SetStateAction, useState } from 'react';

import { Button } from '@chakra-ui/react';
import CarouselButton from './CarouselButton';
import CarouselNavigation from './carousel-navigation/CarouselNavigation';
import CarouselVariations from './CarouselVariations';
import { ICarouselItem } from './carousel.interface';
import { IProduct } from '@//types/product.interface';
import Image from 'next/image';
import { TypeSize } from '@//store/types';
import cn from 'clsx';
import styles from '../Carousel.module.scss';

const CarouselItem: FC<ICarouselItem> = ({
  product,
  isActive,
  selectItem,
  prevHandler,
  nextHandler,
}) => {
  const [selectedSize, setSelectedSize] = useState<TypeSize>('42 EU');

  return (
    <button
      className={cn(styles.item, {
        [styles.active]: isActive,
      })}
      onClick={selectItem}
      aria-label="Select item"
      role="button">
      <div>
        <CarouselNavigation
          isActive={isActive}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          product={product}
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
    </button>
  );
};

export default CarouselItem;

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { ICarouselNavigation } from '../carousel.interface';
import Image from 'next/image';
import { products } from '@//data/product.data';
import styles from './CarouselNavigation.module.scss';
import { useActions } from '@//hooks/useActions';

const CarouselNavigation: FC<ICarouselNavigation> = ({ product, isActive, onSelectSlide }) => {
  const { prevSlide, nextSlide } = useActions();

  return (
    <div className={styles.navigation}>
      {isActive && (
        <div className={styles.arrows}>
          <button onClick={() => prevSlide()} className={styles.arrow}>
            <ChevronLeftIcon fontSize={40} />
          </button>

          <button
            onClick={() => nextSlide({ carouselLength: products.length })}
            className={styles.arrow}>
            <ChevronRightIcon fontSize={40} />
          </button>
        </div>
      )}
      <button onClick={onSelectSlide} className={styles.image}>
        <Image
          alt={product.name}
          src={product.images[0]}
          width={230}
          height={240}
          draggable={false}
        />
      </button>
    </div>
  );
};

export default CarouselNavigation;

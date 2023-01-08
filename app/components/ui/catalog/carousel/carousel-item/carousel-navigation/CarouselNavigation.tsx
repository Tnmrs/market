import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { ICarouselNavigation } from '../carousel.interface';
import Image from 'next/image';
import styles from './CarouselNavigation.module.scss';

const CarouselNavigation: FC<ICarouselNavigation> = ({
  isActive,
  nextHandler,
  prevHandler,
  product,
}) => {
  return (
    <div className={styles.navigation}>
      {isActive && (
        <div className={styles.arrows}>
          <button onClick={prevHandler} className={styles.arrow}>
            <ChevronLeftIcon fontSize={40} />
          </button>
          <button onClick={nextHandler} className={styles.arrow}>
            <ChevronRightIcon fontSize={40} />
          </button>
        </div>
      )}

      <Image
        className={styles.image}
        alt={product.name}
        src={product.images[0]}
        width={230}
        height={240}
        draggable={false}
      />
    </div>
  );
};

export default CarouselNavigation;

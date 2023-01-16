import { FC, useState } from 'react';

import CarouselButton from './CarouselButton';
import CarouselNavigation from './carousel-navigation/CarouselNavigation';
import CarouselVariations from './CarouselVariations';
import { ICarouselItem } from './carousel.interface';
import { Link } from '@chakra-ui/react';
import { TypeSize } from '@//store/cart/cart.types';
import cn from 'clsx';
import { motion } from 'framer-motion';
import styles from '../Carousel.module.scss';
import { useActions } from '@//hooks/useActions';
import { useCarousel } from '../useCarousel';

const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
  const [selectedSize, setSelectedSize] = useState<TypeSize>('42 EU');

  const { selectedItemIndex } = useCarousel();
  const { selectSlide } = useActions();
  const isActive = index == selectedItemIndex;

  return (
    <motion.div
      className={cn(styles.item, {
        [styles.active]: isActive,
      })}
      initial={{ scale: 1 }}
      animate={isActive ? { scale: 1.12 } : {}}
      transition={{ duration: 0.8, type: 'tween' }}
      aria-label="Select item"
      role="button">
      <div>
        <CarouselNavigation
          onSelectSlide={() => selectSlide(index)}
          product={product}
          isActive={isActive}
        />

        <button className={styles.heading} onClick={() => selectSlide(index)}>
          <span>{product.name}</span>
        </button>

        {isActive ? (
          <>
            <CarouselVariations
              productId={product.id}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
            <CarouselButton product={product} selectedSize={selectedSize} />
            <Link href={`/product/${product.slug}`} className={styles.link}>
              More information
            </Link>
          </>
        ) : (
          <div className={styles.description}>{product.description}</div>
        )}
      </div>
    </motion.div>
  );
};

export default CarouselItem;

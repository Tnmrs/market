import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { FC } from 'react';
import Link from 'next/link';
import cn from 'clsx';
import styles from './ProductNavigation.module.scss';
import { useProductNavigation } from './useProductNavigation';

const ProductNavigation: FC<{ productId: number }> = ({ productId }) => {
  const { nextProductSlug, prevProductSlug } = useProductNavigation(productId);

  return (
    <div className={styles.nav}>
      <Link
        href={`/product/${prevProductSlug}`}
        className={cn({
          disabled: !prevProductSlug,
        })}>
        <ChevronLeftIcon fontSize={46} />
      </Link>
      <Link
        href={`/product/${nextProductSlug}`}
        className={cn({
          disabled: !nextProductSlug,
        })}>
        <ChevronRightIcon fontSize={46} />
      </Link>
    </div>
  );
};

export default ProductNavigation;

import { FC, useState } from 'react';

import Carousel from './carousel/Carousel';
import { EnumSorting } from '../sort/sorting.interface';
import { IProduct } from '@//types/product.interface';
import Sort from '../sort/Sort';
import styles from './Catalog.module.scss';

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
  const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST);
  return (
    <div className={styles.bg}>
      <div className={styles.sort}>
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <Carousel products={products} />
    </div>
  );
};

export default Catalog;

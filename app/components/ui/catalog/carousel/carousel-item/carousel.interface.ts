import { IProduct } from '@//types/product.interface';

export interface ICarouselItem {
  isActive: boolean;
  selectItem: () => void;
  product: IProduct;
  prevHandler: () => void;
  nextHandler: () => void;
}

export interface ICarouselNavigation extends Omit<ICarouselItem, 'selectItem'> {}

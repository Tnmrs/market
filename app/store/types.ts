import { ICartItem } from '../types/cart.interface';

export interface IInitialState {
  items: ICartItem[];
}

export interface IAddToCardPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
  type: 'minus' | 'plus';
}

export type TypeSize =
  | '40.5 EU'
  | '41 EU'
  | '42 EU'
  | '42.5 EU'
  | '43 EU'
  | '44 EU'
  | '44.5 EU'
  | '45 EU'
  | '46 EU'
  | '47 EU';

export interface IChangeSizePayload extends Pick<ICartItem, 'id'> {
  size: TypeSize;
}

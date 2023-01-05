import { ICartItem } from '../types/cart.interface';

export interface IInitialState {
  items: ICartItem[];
}

export interface IAddToCardPayload extends Omit<ICartItem, 'id'> {}

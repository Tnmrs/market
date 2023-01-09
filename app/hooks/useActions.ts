import { bindActionCreators } from 'redux';
import { carouselSlice } from '../store/carousel/carousel.slice';
import { cartSlice } from '../store/cart/cart.slice';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

const rootAction = {
  ...cartSlice.actions,
  ...carouselSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};

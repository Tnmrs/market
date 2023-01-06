import { bindActionCreators, bindActions } from 'redux';

import { cartSlice } from '../store/slice';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

const rootAction = {
  ...cartSlice.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
import { EnumSorting, ISortingItem } from './sorting.interface';

export const sortingData: ISortingItem[] = [
  {
    label: 'Newest',
    value: EnumSorting.NEWEST,
  },
  {
    label: 'Oldest',
    value: EnumSorting.OLDEST,
  },
  {
    label: 'Price: low to low',
    value: EnumSorting.UP_PRICE,
  },
  {
    label: 'Price: low to high',
    value: EnumSorting.DOWN_PRICE,
  },
];

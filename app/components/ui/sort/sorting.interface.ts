export enum EnumSorting {
  UP_PRICE = 'UP_PRICE',
  DOWN_PRICE = 'DOWN_PRICE',
  NEWEST = 'NEWEST',
  OLDEST = 'OLDEST',
}

export interface ISortingItem {
  label: 'Price: low to low' | 'Price: low to high' | 'Newest' | 'Oldest';
  value: EnumSorting;
}

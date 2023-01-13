import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';

import { ChevronDownIcon } from '@chakra-ui/icons';
import { EnumSorting } from './sorting.interface';
import { sortingData } from './sorting.data';

interface ISort {
  sortType: EnumSorting;
  setSortType: Dispatch<SetStateAction<EnumSorting>>;
}

const Sort: FC<ISort> = ({ setSortType, sortType }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {sortingData.find((sort) => sort.value == sortType)?.label}
      </MenuButton>
      <MenuList>
        {sortingData.map((sort) => (
          <MenuItem key={sort.value} onClick={() => setSortType(sort.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Sort;

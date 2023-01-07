import { FC, useState } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';
import styles from './Search.module.scss';

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className={styles.search}>
      <InputGroup size="xs">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>

        <Input
          variant="flushed"
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search"
          _focus={{
            boxShadow: 'none',
          }}
          _focusVisible={{
            borderColor: '#ebfff7',
          }}
        />
      </InputGroup>
    </div>
  );
};

export default Search;

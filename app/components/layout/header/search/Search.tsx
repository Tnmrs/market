import { FC, useState } from 'react';
import styles from './Search.module.scss';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className={styles.search}>
      <InputGroup size="xs">
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />

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

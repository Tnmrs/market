import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { IProductDetails } from '@//../pages/product/[slug]';
import Link from 'next/link';
import { products } from '@//data/product.data';

const Breadcrumbs: FC<IProductDetails> = ({ product }) => {
  return (
    <Breadcrumb
      display="flex"
      justifyContent="end"
      spacing="8px"
      marginTop={10}
      separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/">
          New
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink>Brands</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink _hover={{ textDecoration: 'none' }} cursor="default">
          {product.name}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
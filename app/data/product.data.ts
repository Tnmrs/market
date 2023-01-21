import { IProduct } from '@//types/product.interface';
import { reviews } from './review.data';

export const products: IProduct[] = [
  {
    id: 1,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'ADIDAS YEEZY BOOST 350 GSCHWANDTNER EDITION',
    slug: 'ADIDAS-YEEZY-BOOST-350-GSCHWANDTNER-EDITION',
    images: [
      '/images/products/yezzy/ab1.png',
      '/images/products/yezzy/ab2.png',
      '/images/products/yezzy/ab3.png',
    ],
    price: 180,
    reviews: [reviews[0], reviews[1], reviews[2]],
  },

  {
    id: 2,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'NIKE AIR FORCE 1 RETRO',
    slug: 'NIKE-AIR-FORCE-1-RETRO',
    images: [
      '/images/products/airjordan/air1.png',
      '/images/products/airjordan/air2.png',
      '/images/products/airjordan/air3.png',
    ],
    price: 120,
    reviews: [],
  },

  {
    id: 3,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'NIKE AIR FORCE 1 MID QS',
    slug: 'NIKE-AIR-FORCE-1-MID-QS',
    images: [
      '/images/products/airjordan/airf1.png',
      '/images/products/airjordan/airf2.png',
      '/images/products/airjordan/airf3.png',
    ],
    price: 140,
    reviews: [],
  },

  {
    id: 4,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'JORDAN 1 ELEVATE',
    slug: 'JORDAN-1-ELEVATE',
    images: [
      '/images/products/airjordan/ar1.png',
      '/images/products/airjordan/ar2.png',
      '/images/products/airjordan/ar3.png',
    ],
    price: 139,
    reviews: [],
  },
  {
    id: 5,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'ADIDAS KANYE WEST YEEZY 500',
    slug: 'ADIDAS-KANYE-WEST-YEEZY-500',
    images: [
      '/images/products/yezzy/ay1.png',
      '/images/products/yezzy/ay2.png',
      '/images/products/yezzy/ay3.png',
    ],
    price: 146,
    reviews: [],
  },
  {
    id: 6,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'Adidas Yezzy Boost 500',
    slug: 'Adidas-Yezzy-Boost-500',
    images: [
      '/images/products/yezzy/yb1.png',
      '/images/products/yezzy/yb2.png',
      '/images/products/yezzy/yb3.png',
    ],
    price: 220,
    reviews: [],
  },
];

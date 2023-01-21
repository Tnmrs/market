import { IProduct } from '@//types/product.interface';
import { reviews } from './review.data';

export const products: IProduct[] = [
  {
    id: 1,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'Adidas Yezzy Boost 350 v2 (White)',
    slug: 'adidas-yezzy-boost-350-v2-(white)',
    images: ['/images/products/air2.png', '/images/products/air2.png', '/images/products/air2.png'],
    price: 200,
    reviews: [reviews[0], reviews[1], reviews[2]],
  },

  {
    id: 2,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'Adidas Yezzy Boost 350 v2 (Orange)',
    slug: 'adidas-yezzy-boost-350-v2-(Orange)',
    images: ['/images/products/air3.png', '/images/products/air3.png', '/images/products/air3.png'],
    price: 200,
    reviews: [],
  },

  {
    id: 3,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'Adidas Yezzy Boost 350 v2 (Salat)',
    slug: 'adidas-yezzy-boost-350-v2-(Salat)',
    images: ['/images/products/air4.png', '/images/products/air4.png', '/images/products/air4.png'],
    price: 200,
    reviews: [],
  },

  {
    id: 4,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'Nike Air Force Jordan White',
    slug: 'nike-air-force-jordan-white',
    images: ['/images/products/air5.png', '/images/products/air5.png', '/images/products/air5.png'],
    price: 200,
    reviews: [],
  },
  {
    id: 1,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'Adidas Yezzy Boost 350 v2 (White)',
    slug: 'adidas-yezzy-Boost-350-v2-(White)',
    images: ['/images/products/air6.png', '/images/products/air6.png', '/images/products/air6.png'],
    price: 200,
    reviews: [],
  },
  {
    id: 6,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'Adidas Yezzya Boost v2',
    slug: 'adidas-yezzy-boost-v2',
    images: ['/images/products/air7.png', '/images/products/air7.png', '/images/products/air7.png'],
    price: 200,
    reviews: [],
  },
  {
    id: 7,
    description: 'p',
    name: 'Nike Air Force Jordan Blue',
    slug: 'nike-air-force-jordan-blue',
    images: ['/images/products/air8.png', '/images/products/air8.png', '/images/products/air8.png'],
    price: 200,
    reviews: [],
  },
  {
    id: 8,
    description:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    name: 'Adidas YEEZY 700 Mauve',
    slug: 'adidas-yezzy-700-mauve',
    images: ['/images/products/air4.png', '/images/products/air4.png', '/images/products/air4.png'],
    price: 200,
    reviews: [],
  },
];

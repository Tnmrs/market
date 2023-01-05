import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { FC, useRef, useState } from 'react';

import CartItem from './cart-item/CartItem';
import { cart } from '@//data/cart.data';
import styles from '../cart/Cart.module.scss';

const Cart: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles['wrapper-cart']}>
      <button className={styles.heading} onClick={() => setIsOpen(!isOpen)} ref={btnRef}>
        <span className={styles.badge}>1</span>
        <span className={styles.text}>Basket</span>
      </button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => setIsOpen(false)}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My cart</DrawerHeader>

          <DrawerBody>
            <div className={styles.cart}>
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
          </DrawerBody>

          <DrawerFooter
            justifyContent="space-between"
            borderTopColor={'#F7F4F0'}
            borderTopWidth={1}>
            <div className={styles.footer}>
              <div>Total:</div>
              <div>$1000</div>
            </div>
            <Button colorScheme="green">CheckOut</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Cart;

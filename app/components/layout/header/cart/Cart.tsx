import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
} from '@chakra-ui/react';
import { FC, useRef, useState } from 'react';

import CartItem from './cart-item/CartItem';
import { formatToCurrency } from '@//utils/format-to-currency';
import styles from '../cart/Cart.module.scss';
import { useCart } from '@//hooks/useCart';

const Cart: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const { cart, total } = useCart();

  return (
    <div className={styles['wrapper-cart']}>
      <button className={styles.heading} onClick={() => setIsOpen(!isOpen)} ref={btnRef}>
        <span className={styles.badge}>{cart.length}</span>
        <span className={styles.text}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className={styles.bag}
            viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </span>
      </button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => setIsOpen(false)}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>

          <DrawerBody>
            <div className={styles.cart}>
              {cart.length ? (
                cart.map((item) => <CartItem item={item} key={item.id} />)
              ) : (
                <div>Add something to your shopping cart to make a purchase</div>
              )}
            </div>
          </DrawerBody>

          <DrawerFooter
            justifyContent="space-between"
            borderTopColor={'#F7F4F0'}
            borderTopWidth={1}>
            <div className={styles.footer}>
              <div>Total:</div>
              <div>{formatToCurrency(total)}</div>
            </div>
            <Button colorScheme="blackAlpha">CheckOut</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Cart;

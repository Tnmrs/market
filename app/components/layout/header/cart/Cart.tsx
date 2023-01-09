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
          <DrawerHeader>My basket</DrawerHeader>

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

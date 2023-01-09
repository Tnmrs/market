import { Button } from '@chakra-ui/react';
import { COLORS } from '@//config/color.config';
import { FC } from 'react';
import { IProduct } from '@//types/product.interface';
import { TypeSize } from '@//store/cart/cart.types';
import { useActions } from '@//hooks/useActions';
import { useCart } from '@//hooks/useCart';

interface ICarouselButton {
  product: IProduct;
  selectedSize: TypeSize;
}

const CarouselButton: FC<ICarouselButton> = ({ product, selectedSize }) => {
  const { addToCart, removeFromCart } = useActions();
  const { cart } = useCart();

  const currentElement = cart.find(
    (cartItem) => cartItem.product.id == product.id && cartItem.size == selectedSize,
  );

  return (
    <div className="text-center">
      <Button
        onClick={() =>
          currentElement
            ? removeFromCart({ id: currentElement.id })
            : addToCart({
                product,
                quantity: 1,
                size: selectedSize,
              })
        }
        color={COLORS.black}
        className="font-normal tracking-widest"
        marginTop={5}
        borderRadius={10}
        fontWeight={500}
        textTransform={'uppercase'}
        fontSize={10}>
        {currentElement ? 'Remove from basket' : 'Add to Basket'}
      </Button>
    </div>
  );
};

export default CarouselButton;

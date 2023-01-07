import { Button } from '@chakra-ui/react';
import { COLORS } from '@//config/color.config';
import { FC } from 'react';
import { IProduct } from '@//types/product.interface';
import { TypeSize } from '@//store/types';
import { useActions } from '@//hooks/useActions';

interface ICarouselButton {
  product: IProduct;
  selectedSize: TypeSize;
}

const CarouselButton: FC<ICarouselButton> = ({ product, selectedSize }) => {
  const { addToCart } = useActions();

  return (
    <div className="text-center">
      <Button
        onClick={() =>
          addToCart({
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
        Add to Basket
      </Button>
    </div>
  );
};

export default CarouselButton;

import { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {
  Counter,
  DecreaseButton,
  IncreaseButton,
  QuantityAndCounterContainer,
  QuantityContainer,
  QuantityLabel,
  RemoveItem,
} from "./styles";
import { Cart } from "../../models/Card";
import { CartContext } from "../../contexts/Cart/CartContext";

type Props = {
  productInCart: Cart;
};

export const CartItemCounter = ({ productInCart }: Props) => {
  const { decreaseQuantity, increaseQuantity, removeFromCart } =
    useContext(CartContext);

  return (
    <QuantityContainer>
      <QuantityAndCounterContainer>
        <QuantityLabel>Quant.</QuantityLabel>

        <Counter>
          <DecreaseButton disabled={productInCart.quantity === 1}>
            <IoIosArrowBack
              fontSize={20}
              onClick={() => decreaseQuantity(productInCart.id)}
            />
          </DecreaseButton>
          <h2>{productInCart.quantity}</h2>
          <IncreaseButton>
            <IoIosArrowForward
              fontSize={20}
              onClick={() => increaseQuantity(productInCart.id)}
            />
          </IncreaseButton>
        </Counter>
      </QuantityAndCounterContainer>
      <RemoveItem onClick={() => removeFromCart(productInCart.id)}>
        Remover
      </RemoveItem>
    </QuantityContainer>
  );
};

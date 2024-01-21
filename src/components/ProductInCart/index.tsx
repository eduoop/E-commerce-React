import {
  CardContainer,
  FinalPriceContainer,
  Infos,
  QuantityAndPriceContainer,
  SimpleSpan,
  Title,
  TotalPrice,
} from "./styles";
import FilterPercentToInteger from "../../utils/FilterPercentToInteger";
import { CartItemCounter } from "../CartItemCounter";
import { Cart } from "../../models/Card";
import FilterIntegerValueToRealWithDiscount from "../../utils/FilterIntegerValueToRealWithDiscount";
import formatData from "../../utils/FormatData";

type Props = {
  productInCart: Cart;
};

export const ProductInCart = ({ productInCart }: Props) => {
  

  return (
    <CardContainer>
        <img src={productInCart.image} alt="product image" />
        <Infos>
          <Title>{productInCart.name}</Title>

          <div>
            <SimpleSpan>
              Pulblicado em: <span>{formatData(productInCart)}</span>
            </SimpleSpan>
            <SimpleSpan>
              Desconto de:{" "}
              <span>
                {FilterPercentToInteger(JSON.stringify(productInCart.discount))}
                %
              </span>
            </SimpleSpan>
          </div>
        </Infos>

      <QuantityAndPriceContainer>
        <CartItemCounter productInCart={productInCart} />

        <FinalPriceContainer>
          <SimpleSpan>Preço á vista no PIX:</SimpleSpan>
          <TotalPrice>
            {FilterIntegerValueToRealWithDiscount(
              productInCart.price * productInCart.quantity,
              productInCart.discount
            )}
          </TotalPrice>
        </FinalPriceContainer>
      </QuantityAndPriceContainer>
    </CardContainer>
  );
};

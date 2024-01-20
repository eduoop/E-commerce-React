import React from "react";
import { Product } from "../../models/Product";
import {
  BuyButton,
  CardContainer,
  CardTopItems,
  ClickedArea,
  ClickedAreaInfos,
  ClickedAreaInfosPrices,
  Discount,
  InStock,
  OldPrice,
  PixInfo,
  Price,
} from "./styles";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import FilterIntegerValueToRealWithDiscount from "../../utils/FilterIntegerValueToRealWithDiscount";
import FilterPercentToInteger from "../../utils/FilterPercentToInteger";

type Props = {
  product: Product;
};

export const ProductCardMain = ({ product }: Props) => {
  const inCart = false;

  return (
    <CardContainer>
      <CardTopItems>
        <div style={{ display: "flex", gap: ".5em" }}>
          <Discount>
            <h2>{FilterPercentToInteger(JSON.stringify(product.discount))}%</h2>
            <IoMdArrowDropdown color="white" />
          </Discount>
          <InStock>
            <h2>Em estoque</h2>
          </InStock>
        </div>
        <FaCartShopping
          cursor="pointer"
          color={inCart ? "#f17a28" : "#7f858d"}
          fontSize={20}
        />
      </CardTopItems>

      <ClickedArea>
        <img src={product.image} alt="product image" />

        <ClickedAreaInfos>
          <h2>{product.name}</h2>

          <ClickedAreaInfosPrices>
            <OldPrice>{FilterIntegerValueToRealWithDiscount(product.price)}</OldPrice>
            <Price>{FilterIntegerValueToRealWithDiscount(product.price, product.discount)}</Price>
            <PixInfo>À vista no PIX</PixInfo>
          </ClickedAreaInfosPrices>
        </ClickedAreaInfos>
      </ClickedArea>

      <BuyButton>
      <FaCartShopping
          cursor="pointer"
          color={'white'}
          fontSize={20}
        />
        Comprar</BuyButton>
    </CardContainer>
  );
};

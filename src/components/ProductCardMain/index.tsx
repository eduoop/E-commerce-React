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
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart/CartContext";
import { useNavigate } from "react-router-dom";
import formatData from "../../utils/FormatData";

type Props = {
  product: Product;
};

export const ProductCardMain = ({ product }: Props) => {
  const { setCart, cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const isItemInCart = (productId: number) => {
    return cart.some((item) => item.id === productId);
  };

  const itemIsInCart = isItemInCart(product.id);

  const addInCart = () => {
    setCart((oldItems) => [
      ...oldItems,
      {
        dateInclusion: product.dateInclusion,
        discount: product.discount,
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        quantity: 1,
      },
    ]);
  };

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
          onClick={() =>
            itemIsInCart ? removeFromCart(product.id) : addInCart()
          }
          cursor="pointer"
          color={itemIsInCart ? "#f17a28" : "#7f858d"}
          fontSize={20}
        />
      </CardTopItems>

      <ClickedArea>
        <img src={product.image} alt="product image" />

        <ClickedAreaInfos>
          <h2>{product.name}</h2>

          <ClickedAreaInfosPrices>
            <OldPrice>
              {FilterIntegerValueToRealWithDiscount(product.price)}
            </OldPrice>
            <Price>
              {FilterIntegerValueToRealWithDiscount(
                product.price,
                product.discount
              )}
            </Price>
            <PixInfo>Pulblicado em: {formatData(product)}</PixInfo>
          </ClickedAreaInfosPrices>
        </ClickedAreaInfos>
      </ClickedArea>

      <BuyButton
        onClick={() => (itemIsInCart ? navigate("/cart") : addInCart())}
      >
        <FaCartShopping cursor="pointer" color={"white"} fontSize={20} />
        {itemIsInCart ? "Finalizar" : "Comprar"}
      </BuyButton>
    </CardContainer>
  );
};

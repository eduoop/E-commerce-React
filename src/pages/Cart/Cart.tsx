import { NavLink } from "react-router-dom";
import { IconContainer, Navbar } from "../Home/styles";
import {
  CartContainer,
  CleanerItems,
  EmptyMessage,
  GeneralSeparator,
  IconAndTitle,
  ListCartItems,
  ListItems,
  ListItemsTop,
  OrangeBar,
} from "./styles";
import { GoHomeFill } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart/CartContext";
import { FaShoppingBasket } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { ProductInCart } from "../../components/ProductInCart";
import { CartResume } from "../../components/CartResume";

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <CartContainer>
      <Navbar>
        <IconContainer>
          <NavLink to="/">
            <GoHomeFill fontSize={40} />
          </NavLink>
        </IconContainer>

        <IconContainer>
          <NavLink to="/cart">
            <FaCartShopping fontSize={35} />
          </NavLink>

          <span>{cart.length}</span>
        </IconContainer>
      </Navbar>
      <OrangeBar />

      <GeneralSeparator>
        <ListCartItems>
          <ListItemsTop>
            <IconAndTitle>
              <FaShoppingBasket fontSize={23} />
              <h1>{cart.length > 0 ? `Produtos (${cart.length})` : `Produtos`}</h1>
            </IconAndTitle>
            {cart.length > 0 && (
              <CleanerItems onClick={() => setCart([])}>
                <FaTrash />
                Limpar
              </CleanerItems>
            )}
          </ListItemsTop>

          {cart.length > 0 ? (
            <ListItems>
              {cart.map((product) => (
                <ProductInCart productInCart={product} />
              ))}
            </ListItems>
          ) : (
            <EmptyMessage>
              Tudo vazio por aqui. <NavLink to={"/"}>Todos os produtos</NavLink>
            </EmptyMessage>
          )}
        </ListCartItems>

        <CartResume/>

        
      </GeneralSeparator>
    </CartContainer>
  );
};

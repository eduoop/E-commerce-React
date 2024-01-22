import {
    IconAndTitle,
    InfoAndValue,
    Resume,
    Line,
    TotalCredit,
    InfoAndValueCredit,
    TotalPix,
    TotalPixPrice,
    PayButton,
    ShoppingButton,
  } from "./styles";
  import { BsFileEarmarkTextFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart/CartContext";
import FilterIntegerValueToRealWithDiscount from "../../utils/FilterIntegerValueToRealWithDiscount";
import { toast } from "react-toastify";

export const CartResume = () => {

  const navigate = useNavigate()
  const { sumCardItems, setCart, cart } = useContext(CartContext);

  const splitValue = () => {
    const sumAllCardItems = sumCardItems()
    const splitValue = sumAllCardItems/10
    return FilterIntegerValueToRealWithDiscount(splitValue)
  }

  const buyProducts = () => {
    if(cart.length > 0) {
      navigate('/')
      setCart([])
      toast.success('Pedido realizado!', {
        position: 'bottom-right'
      })
    } else {
      toast.error('Você não possue produtos no carrinho', {
        position: 'bottom-right'
      })
    }
  }

  return (
    <Resume>
      <IconAndTitle style={{ marginBottom: "2rem" }}>
        <BsFileEarmarkTextFill fontSize={23} />
        <h1>Resumo</h1>
      </IconAndTitle>

      <InfoAndValue>
        Valor dos produtos: <b>{FilterIntegerValueToRealWithDiscount(sumCardItems())}</b>
      </InfoAndValue>
      <Line />

      <InfoAndValue>
        Valor do frete: <b>R$ 0,00</b>
      </InfoAndValue>

      <TotalCredit>
        <InfoAndValueCredit>
          Total à prazo: <b>{FilterIntegerValueToRealWithDiscount(sumCardItems())}</b>
        </InfoAndValueCredit>

        <span>
          (em até <b>10x</b> de <b>{splitValue()} sem juros</b>)
        </span>
      </TotalCredit>

      <TotalPix>
        <span>
          Valor á vista no <b>Pix:</b>
        </span>
        <TotalPixPrice>
          {FilterIntegerValueToRealWithDiscount(sumCardItems())}
          <span>
            (Confirmação <b>imediata</b>)
          </span>
        </TotalPixPrice>
      </TotalPix>

      <PayButton onClick={() => buyProducts()}>Finalizar Compra</PayButton>
      <ShoppingButton onClick={() => navigate("/")}>
        Comprar mais
      </ShoppingButton>
    </Resume>
  );
};

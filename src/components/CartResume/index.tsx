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

export const CartResume = () => {

  const navigate = useNavigate()
  const { sumCardItems } = useContext(CartContext);


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
          (em até <b>10x</b> de <b>R$ 929,90 sem juros</b>)
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

      <PayButton>Ir para o pagamento</PayButton>
      <ShoppingButton onClick={() => navigate("/")}>
        Comprar mais
      </ShoppingButton>
    </Resume>
  );
};

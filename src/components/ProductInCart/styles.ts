import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 5.5rem 2fr 1fr;
  gap: 1rem;
  padding: 1rem 0px;
  border-top: 1px solid rgb(242, 243, 244);

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Ajuste para uma coluna em telas menores */
  }

  img {
    object-fit: contain;
    width: 5.5rem;
    height: 5.5rem;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const InfosAndQuantity = styled.div``;

export const SimpleSpan = styled.p`
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 400;
  color: rgb(127, 133, 141);

  span {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 700;
  }
`;

export const Title = styled.h1`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 700;
  color: rgb(66, 70, 77);
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
`;

export const TotalPrice = styled.h1`
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(255, 101, 0);
`;

export const QuantityAndPriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  justify-content: space-between;

  /* Estilo para telas maiores (a partir de 1024px) */
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const FinalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;

  @media (min-width: 600px) {
    gap: 0.25rem;
    text-align: right;
  }

  @media (min-width: 1024px) {
    gap: 0.5rem;
  }
`;

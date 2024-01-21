import styled from "styled-components";

export const QuantityContainer = styled.div`
  display: flex;
  gap: 1rem;
  height: fit-content;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const QuantityAndCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuantityLabel = styled.p`
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 400;
  text-align: center;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  h2 {
    font-size: 1rem;
    line-height: 2em;
    font-weight: 700;
    text-align: center;
  }
`;

export const DecreaseButton = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  color: rgb(255, 101, 0);

  &:disabled {
    color: rgb(182, 187, 194); !important;
    cursor: default;
  }
`;

export const IncreaseButton = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  svg {
    color: rgb(255, 101, 0);
  }
`;

export const RemoveItem = styled.button`
  color: rgb(213, 13, 13);
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  background: none;
  gap: 0.5rem;
  outline: none;
  border: none;
  transition: 0.3s;

  &:hover {
    color: #d50d0db3;
  }
`;

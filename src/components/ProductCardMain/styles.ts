import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em;
  box-shadow: rgba(40, 41, 61, 0.08) 0px 0px 1px,
    rgba(96, 97, 112, 0.16) 0px 0.5px 2px;
  background: rgb(255, 255, 255);
`;

export const CardTopItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7em;
  margin-bottom: 0.5em;
`;

export const Discount = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  background: rgb(241, 122, 40);
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;

  h2 {
    font-size: 0.8125rem;
    line-height: 0.8125rem;
    font-weight: 700;
    color: white;
  }

  svg {
    line-height: 0.8125rem;
  }
`;

export const InStock = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 40px;
  border: 1px solid rgb(241, 122, 40);
  background: white;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;

  h2 {
    font-size: 0.5em;
    line-height: 0.625rem;
    font-weight: 700;
    text-align: center;
    color: rgb(241, 122, 40);
    text-transform: uppercase;
  }
`;

export const ClickedArea = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1em;

  img {
    height: 10.125rem;
    width: auto;
    max-width: 100%;
    object-fit: contain;
  }
`;

export const ClickedAreaInfos = styled.div`
  padding: 0px 1rem;

  h2 {
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 600;
    margin-top: 0.5rem;
    color: rgb(66, 70, 77);
    min-height: 3.375rem;
  }
`;

export const ClickedAreaInfosPrices = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0px;
`;

export const OldPrice = styled.span`
  font-size: 0.75rem;
  line-height: 1.375rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  height: 0.75rem;
  color: rgb(127, 133, 141);
  text-decoration: line-through;
`;

export const PixInfo = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  height: 0.75rem;
  color: rgb(127, 133, 141);
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: 700;
  height: 1.25rem;
  text-decoration: none;
  color: rgb(255, 101, 0);
`;

export const BuyButton = styled.span`
  font-size: 0.8em;
  line-height: 1.125rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: rgb(255, 255, 255);
  cursor: pointer;
  background: rgb(255, 101, 0);
  padding: .7em 0em;
  border-radius: 0.25rem;
  gap: 1em;
`;

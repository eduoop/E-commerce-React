import styled from "styled-components";
import CurrencyInput from "react-currency-input-field";
interface TitleProps {
  fontSize: string;
  fontWeight: string;
}
interface ButtonProps {
  bgColor: string;
  textColor: string;
}

export const MainContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

export const Navbar = styled.nav`
  width: 100%;
  min-height: 110px;
  background-color: rgb(0, 96, 177);
  padding: 0.5em 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;

  @media (min-width: 600px) {
    padding: 0.5em 40px;
    gap: 1em;
  }
`;

export const IconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  a {
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    transition: 0.2s;
    &:hover {
      background: #e27140;
    }
  }

  svg {
    color: #fff;
  }

  span {
    border-radius: 10px;
    background: rgb(227, 82, 20);
    padding: 0px 6px;
    color: rgb(250, 250, 251);
    position: absolute;
    top: 0px;
    right: 0px;
    height: 20px;
    color: rgb(250, 250, 251);
    font-weight: bold;
    min-width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    cursor: pointer;
  }
`;

export const IconContainerHome = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  display: none;

  a {
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    transition: 0.2s;
    &:hover {
      background: #e27140;
    }
  }

  svg {
    color: #fff;
  }

  @media (min-width: 600px) {
    display: block;
  }
`;

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  max-width: 1200px;

  input {
    font-size: 16px;
    position: relative;
    font-weight: 500;
    height: 100%;
    width: 80%;
    border: none;
    padding: 0.75em 0.75em;
    background: rgb(255, 255, 255);
    color: rgb(66, 70, 77);
    border-radius: 0.25em 0em 0em 0.25em;
    outline: none;

    &::placeholder {
      color: #999a9b;
    }
  }

  button {
    height: 100%;
    border: none;
    outline: none;
    background: #fc6b0f;
    padding: 0em 1em;
    border-radius: 0em 0.25em 0.25em 0em;
    transition: 0.5s;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: #fff;
    }
  }

  @media (min-width: 600px) {
    button {
      padding: 0em 2em;
    }

    input {
      font-size: 18px;
    }
  }
`;

export const Filters = styled.div`
  width: 100%;
  padding: 0.8em 20px;
  min-height: 110px;
  background-color: rgb(255, 101, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8em;

  @media (min-width: 600px) {
    padding: 0.8em 40px;
  }
`;

export const FilterBy = styled.h2<TitleProps>`
  color: #fff;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

export const AllFiltersContainer = styled.div`
  width: 100%;
  display: flex;
  gap: .5em;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    gap: 2em;
  }

  @media (min-width: 1024px) {
    gap: 3em;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const Line = styled.div`
  background-color: white;
  border-radius: 17px;
  width: 60px;
  height: 3px;
  display: none;

  @media (min-width: 600px) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const ButtonsContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
  width: 100%;
  padding-right: 0.5em;

  @media (min-width: 600px) {
    margin-top: 0;
    width: auto;
    padding-right: 0;
  }
`

export const PricesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const PriceInput = styled(CurrencyInput)`
  color: #98a0a2;
  text-align: center;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.1px;
  padding: 6px 10px;
  background-color: white;
  border-radius: 4px;
  border: none;
  width: 100px;

  &::placeholder {
    font-size: 16px;
  }
`;

export const SetFiltersButton = styled.button<ButtonProps>`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.1px;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 0.25em;
  padding: .5em 2em;
  outline: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 600px) {
    padding: 1em 2em;
  }
`;

export const Orders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 2em 0 0 2em;
`;

export const OrderTitle = styled.h1`
  display: flex;
  align-items: center;
  color: rgb(66, 70, 77);
  gap: 0.5rem;
  font-size: 1.2em;
  line-height: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`;

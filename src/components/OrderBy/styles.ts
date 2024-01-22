import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5em;
  width: 100px;
  padding-bottom: 0.5em;
`;

export const OrderTitle = styled.h1`
  color: rgb(66, 70, 77);
  font-size: 1em;
  line-height: 1.5rem;
  font-weight: 500;
  width: 80px;
`;

export const Button = styled.button`
  height: 30px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  duration: 0.3s;
  border: 1px solid black;
  background-color: #e7e4e4;
  border: 1px solid #c4c4c4;
  border-radius: 4px;

  &:hover {
    background-color: #DEDEDE;
  }
`;

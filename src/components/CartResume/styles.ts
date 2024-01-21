import styled from "styled-components";

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  border-radius: 0.25rem;
  background: rgb(255, 255, 255);
  padding: 2rem 2rem 1.5rem;

  @media (min-width: 1024px) {
    max-width: 19.5rem;
    gap: unset;
    align-self: flex-start;
    top: 2rem;
    padding: 2rem 2rem 1.5rem;
  }
`;

export const IconAndTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8em;

  svg {
    color: rgb(255, 101, 0);
  }

  h1 {
    font-size: 1.4em;
    line-height: 0.875rem;
    font-weight: 700;
    color: rgb(66, 70, 77);
    margin-left: 0.625rem;
    text-transform: uppercase;
  }
`;

export const ListItemsTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CleanerItems = styled.button`
  color: rgb(213, 13, 13);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background: transparent;
  border: 1px solid rgb(213, 13, 13);
  border-radius: 0.25rem;
  gap: 1em;
  font-size: 14px;
  line-height: 1rem;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: #d50d0d1f;
  }
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const EmptyMessage = styled.h2`
  font-size: 1.2em;
  font-weight: 400;
  color: rgb(66, 70, 77);
  margin-top: 2em;

  a {
    color: rgb(255, 101, 0);
  }
`;

export const SumContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  @media (min-width: 600px) {
    gap: 0.5rem;
  }

  @media (min-width: 1024px) {
    display: unset;
    width: 100%;
    gap: unset;
  }
`;

export const InfoAndValue = styled.div`
  font-size: 0.875rem;
  line-height: 1.125rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: rgb(127, 133, 141);
  align-items: center;
  width: 100%;

  b {
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 400;
    color: rgb(127, 133, 141);
    flex: 1 1 0%;
    text-align: right;
  }

  @media (min-width: 600px) {
    font-size: 0.75rem;
    line-height: 1.125rem;
    padding: 0px 0.75rem;

    b {
      font-size: 1rem;
      line-height: 1.75rem;
      font-weight: 700;
      color: rgb(66, 70, 77);
      text-align: right;
    }
  }

  @media (min-width: 1024px) {
    padding: 0.5rem;
  }
`;

export const InfoAndValueCredit = styled.div`
  font-size: 0.875rem;
  line-height: 1.125rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: rgb(127, 133, 141);
  align-items: center;
  width: 100%;

  b {
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 400;
    color: rgb(127, 133, 141);
    flex: 1 1 0%;
    text-align: right;
  }

  @media (min-width: 600px) {
    font-size: 0.75rem;
    line-height: 1.125rem;

    b {
      font-size: 1rem;
      line-height: 1.75rem;
      font-weight: 700;
      color: rgb(66, 70, 77);
      text-align: right;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: rgb(222, 224, 228);
`;

export const TotalCredit = styled.div`
  background: rgb(250, 250, 251);
  color: rgb(127, 133, 141);
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  line-height: 1.125rem;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 0.5rem;
  }

  @media (min-width: 600px) {
    padding: 0px 0.75rem;
  }
`;

export const TotalPix = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding: 1rem;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(229, 255, 241);
  color: rgb(31, 144, 80);

  span {
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-weight: 400;
  }

  @media (min-width: 1024px) {
    margin: 2rem 0px;
  }
`;

export const TotalPixPrice = styled.div`
  font-size: 1.875rem;
  line-height: 2.375rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.25rem;

  @media (min-width: 600px) {
    align-items: flex-end;
  }

  @media (min-width: 1024px) {
    -webkit-box-align: center;
    align-items: center;
  }
`;

export const PayButton = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid rgb(255, 101, 0);
  background-color: rgb(255, 101, 0);
  user-select: none;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  transition: background-color 0.3s ease 0s;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  line-height: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const ShoppingButton = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid rgb(255, 101, 0);
  background-color: rgb(255, 255, 255);
  user-select: none;
  color: rgb(255, 101, 0);
  text-transform: uppercase;
  transition: background-color 0.3s ease 0s;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  line-height: 2rem;
  font-weight: 600;
  margin: 0px;
`;
import styled from "styled-components";

export const AllProductsContainer = styled.div`
  padding: 2em;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

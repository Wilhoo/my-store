import styled from 'styled-components';

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 5px 20px;
  border-radius: 10px;

  /* &:not(:first-child) {
  } */
`;

export const TitleProduct = styled.h1`
  font-size: 20px;
  color: #364759;
`;

export const ImageProduct = styled.img`
  width: 250px;
  height: 240px;
`; 

export const Price = styled.span`
  color: #364759;
`;
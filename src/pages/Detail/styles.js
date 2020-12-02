import styled from 'styled-components';
import { Star } from '@styled-icons/boxicons-regular'
import { Cart } from 'styled-icons/boxicons-regular';

export const Container = styled.div`

`;

export const Product = styled.div`
  display: flex;
  background-color: #fff;
  max-width: 1300px;
  margin: 0 auto;
  justify-content: space-around;
`;

export const ImageProduct = styled.img`
  width: 550px;
  height: 550px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
 
export const Infos = styled.div``;

export const Title = styled.h1`
  font-size: 17px;
`;

export const Avaliation = styled(Star)`
  width: 20px;
  height: 20px;
  color: #fe4749;
`;

export const Price = styled.span``;

export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BuyNow = styled.button`
  padding: 15px;
  background-color: yellow;
  border-radius: 10px;
  /* color: #fff; */
  border: none;
`;

export const AddToCart = styled.button`
  padding: 15px;
  background-color: red;
  border-radius: 10px;
  color: #fff;
  border: none;
`;

export const CartIcon = styled(Cart)`
  height: 30px;
  width: 30px;
  margin-left: 15px;
  margin-right: 5px;
  color: #fff;
`;

export const Description = styled.div`
  display: flex;
  background-color: #fff;
  max-width: 1300px;
  margin: 0 auto;
`;

export const InfoProduct = styled.div``;

export const DescriptionTitle = styled.h1`
  font-size: 20px;
  font-weight: 20px;
`;

export const SellerContact = styled.div``;

export const AboutProduct = styled.span`

`; 

export const Specifications = styled.div`

`; 

export const ProductText = styled.span`

`;

export const Thanks = styled.div`
  background-color: #364759;
  color: #c1c1c2;
  border-top: 1px solid #c1c1c2;
  text-align: center;
  padding: 10px;
`;
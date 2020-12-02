import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1300;

`;

export const Title = styled.h1`
  font-size: 23px;
  margin-bottom: 10px;
`;
 
export const Promo = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-decoration: none;

  border: 1px solid #e9edee;
  border-radius: 10px;
  padding: 5px;

  margin: 0 10px;
`;
 
export const PromoTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #364759;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const ImagePromotion = styled.img`
  height: 250px;
  width: 340px;
  margin: 0 20px;
`;

export const PromoSub = styled.span`
  margin-left: 20px;
  margin-top: 10px;
  color: #364759;

  &:hover {
    color: #c1c2c1;
  }
`;

import styled from 'styled-components';
import { Phone } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ccc;
  background-color: #364759;
  padding: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 16px;
  color: #fff;
  margin-bottom: 7px;
  margin-top: 10px;
`;

export const SubInfo = styled.p`
  font-size: 15px;
  color: #c1c1c2;
`;

export const PhoneIcon = styled(Phone)`
  height: 20px;
  width: 20px;
  color: #fff;
`;
import styled from 'styled-components';
import { Heart } from '@styled-icons/boxicons-regular'
import { Cart } from 'styled-icons/boxicons-regular';
import { SearchOutline } from 'styled-icons/evaicons-outline';

export const Container = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  width: 100px;
  height: 50px;
`;

export const HeaderPage = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-bottom: 0px solid #eee;
  background-color: #1f1e23;
`;

export const ListItems = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.button`
  border: none;
  background: none;
  margin-left: 25px;
  color: #fff;

  :hover {
    color: #c1c1c2;
  }
`;

export const ContainerSearch = styled.div`
  background: #464648;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 15px;
`;

export const Search = styled.input`
  background: #464648;
  border: 0px solid transparent;
  padding: 5px;
  border-radius: 10px;
  color: #fff;

::placeholder {
  font-size: 15px;
  color: #c1c1c2;
  margin-left: 10px;
  padding-left: 8px;
}
`;

export const IconCart = styled(Cart)`
  height: 30px;
  width: 30px;
  margin-left: 15px;
  margin-right: 5px;
  color: #fff;
`;

export const IconSearch = styled(SearchOutline)`
  height: 20px;
  width: 20px;
  color: #fff;
  margin-right: 8px;
`;

export const IconHeart = styled(Heart)`
  height: 25px;
  width: 25px;
  /* margin-left: 15px;
  margin-right: 5px; */
  color: #fff;
`;
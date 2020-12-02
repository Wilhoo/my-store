import React from 'react';

import { HeaderPage, Item, Container, ContainerSearch, Search, IconSearch, IconCart, ListItems } from './styles';

// import LogoImg from '../../assets/logo.jpg';

function Header() {
  return (
        <HeaderPage>
          <ListItems>
            <Item>Home</Item>
            <Item>Categorias</Item>
            <Item>Ofertas</Item>
          </ListItems>
          {/* <Logo src={LogoImg} /> */}
          <Container>
            <ContainerSearch>
              <Search placeholder="Faça sua busca"/>
              <IconSearch />
            </ContainerSearch>
            <Item>Perfil</Item>
            <Item>
              Lista de desejos
              {/* <IconHeart /> */}
            </Item>
            <IconCart/>
          </Container>
        </HeaderPage>
  )
}

export default Header;
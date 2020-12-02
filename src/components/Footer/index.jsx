import React from 'react';

import { Container, Info, Title, SubInfo, PhoneIcon } from './styles';

function Footer() {
  return (
    <Container>
      <Info>
          <Title>Conheça-nos</Title>
          <SubInfo>Informações da loja</SubInfo>
          <SubInfo>Comunidade</SubInfo>
      </Info>
      <Info>
          <Title>Atendimento</Title>
          <SubInfo>Contato: (11)12345678 <PhoneIcon /></SubInfo>
          <SubInfo>Horário de Funcionamento: Seg a Sex, das 8h as 18h</SubInfo>
          <SubInfo>E-Mail: taltal@gmail.com</SubInfo>
      </Info>
      <Info>
          <Title>Formas de pagamento</Title>
          <SubInfo>Boleto</SubInfo>
          <SubInfo>Cartão de Crédito</SubInfo>
          <SubInfo>Depósito</SubInfo>
      </Info>
      <Info>
          <Title>FAQ</Title>
          <SubInfo>Orientações</SubInfo>
          <SubInfo>Frete e entrega </SubInfo>
          <SubInfo>Ajuda</SubInfo>
      </Info>

    </Container>
  )
}

export default Footer;
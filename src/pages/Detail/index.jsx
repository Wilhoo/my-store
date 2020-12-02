import React from 'react';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

import Armario from '../../assets/armario.jpg'

import { Container, Product, ImageProduct, Details, Infos, Title, Avaliation, Price, Buy, BuyNow, AddToCart, CartIcon, Description, InfoProduct, DescriptionTitle, SellerContact, AboutProduct, Specifications, ProductText, Thanks} from './styles';

function Detail() {
  return (
    <Container>
      <Header />

      <Product>
        <ImageProduct src={Armario}/>

        <Details>
            <Infos>
              <Title>Armário de Cozinha 6 Portas 3 Gavetas Mega Espresso Móveis Nogal/Nevada</Title>
              <Avaliation>5 Estrelas iradas</Avaliation>
              <Price>R$980,00</Price>
            </Infos>

            <Buy>
              <BuyNow>Comprar agora</BuyNow>
              <AddToCart>Adicionar ao Carrinho <CartIcon /></AddToCart>
            </Buy>
          </Details>
      </Product>

      <Description>
        <InfoProduct>
          <DescriptionTitle>Descrição do produto:</DescriptionTitle>
          <AboutProduct>
            O Armário Mega possui design moderno e qualidade única, é o móvel ideal para sua cozinha. Possui seis portas, sendo duas de vidro temperado e serigrafado, uma basculante com pistão a gás, e três de abrir, três gavetas espaçosas, a primeira com divisória para talheres, todas com corrediças telescópicas que proporcionam maior amplitude de abertura, três prateleiras internas com excelente espaço para armazenagem de produtos e utensílios. Também contém espaço para micro-ondas, nicho e garrafeiro, tampo em MDP 15mm com acabamento uv-verniz preto texturizado e oito pés com regulagem de altura.
          </AboutProduct>
          <Specifications>
            <ProductText>  
              Altura	192,2 cm
              Largura	207,4 cm
              Profundidade	44,8 cm
            </ProductText>
          </Specifications>
        </InfoProduct>
        <SellerContact>

        </SellerContact>
      </Description>

      <Footer />

      <Thanks>Loja ficticia desenvolvida por Fernando Willian ❤</Thanks>
    </Container>
  );
}

export default Detail;

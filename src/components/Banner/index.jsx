import React from 'react';

import { Container, Title, Promo, PromoTitle, ImagePromotion, PromoSub } from './styles';

import Promo1 from '../../assets/promo1.jpg';
import Promo2 from '../../assets/promo2.jpg';
import SmallerPromo from '../../assets/small_banner.jpg';

function Banner() {
  return (
    <>
      <Title>Você também pode gostar</Title>
      <Container >
        <Promo href="amazon.com.br" target="_blank">
          <PromoTitle>Eletrônicos</PromoTitle>
          <ImagePromotion src={Promo1}/>
          <PromoSub>Confira todos eletrônicos</PromoSub>
        </Promo>
        <Promo href="amazon.com.br" target="_blank">
          <PromoTitle>Cuidados Pessoais</PromoTitle>
          <ImagePromotion src={Promo2}/>
          <PromoSub>Veja mais</PromoSub>
        </Promo>
        <Promo href="amazon.com.br" target="_blank">
          <PromoTitle >Para a sua casa</PromoTitle>
          <ImagePromotion src={SmallerPromo}/>
          <PromoSub>Veja mais</PromoSub>
        </Promo>
      </Container>
    </>
  );
}

export default Banner;
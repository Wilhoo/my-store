import React from 'react';

import Armario from '../../assets/armario.jpg';
import Mesa from '../../assets/mesa.jpg';
import Notebook from '../../assets/notebook.jpg';
import Perfume from '../../assets/perfume.jpg';

import { Product, ImageProduct, TitleProduct, Price } from './styles';

const ProductImages = [
  Armario,
  Mesa,
  Notebook,
  Perfume
];

function Item() {
  return (
    <>
      <Product>
        <ImageProduct src={ProductImages[0]}/>
        <TitleProduct>Armário</TitleProduct>
        <Price>R$ 980,00</Price>
      </Product>
      <Product>
        <ImageProduct src={ProductImages[1]}/>
        <TitleProduct>Mesa</TitleProduct>
        <Price>R$ 800,00</Price>
      </Product>
      <Product>
        <ImageProduct src={ProductImages[2]}/>
        <TitleProduct>Notebook</TitleProduct>
        <Price>R$ 2500,00</Price>
      </Product>
      <Product>
        <ImageProduct src={ProductImages[3]}/>
        <TitleProduct>Perfume</TitleProduct>
        <Price>R$ 120,00</Price>
      </Product>
    </>
  )
}

export default Item;
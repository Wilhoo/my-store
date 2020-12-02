import React from 'react';

import Header from '../../components/Header/index';
import Slider from '../../components/Slider/index';
import Footer from '../../components/Footer/index';
import Item from '../../components/Item/index';
import Banner from '../../components/Banner/index';

import { Container, Itens, Thanks} from './styles';

// import LogoImg from '../../assets/logo.jpg';

function Dashboard() {

  return (
    <Container>

        <Header />
        <Slider />

        <Itens>
          <Item />
          <Item />
          <Banner />
          <Item />
          <Item />
          <Banner />
          <Item />
          <Item />
        </Itens>

        <Footer />

        <Thanks>Loja ficticia desenvolvida por Fernando Willian ❤</Thanks>
    </Container>
  )
}

export default Dashboard;
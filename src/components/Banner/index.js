import React from 'react';

import { Container, Dados, Title, SubTitle, TitleLink, Image} from './styles';

import img13 from '../images/13.png'

export default function Banner (){
  return(
    <Container>
      <Dados>
        <Title>Conheça nossas promoções</Title>
        <SubTitle>Aproveite descontos, promoções e cashbacks sem sair de casa</SubTitle>
        <TitleLink>Ver promoções</TitleLink>
      </Dados>
      <Image source={img13}/>
    </Container>
  )
}
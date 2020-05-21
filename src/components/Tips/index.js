import React from 'react';

import { Container, Option, Title, Image} from './styles';

import img8 from '../images/08.png';
import img9 from '../images/09.png';
import img10 from '../images/10.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';


const Cardsitems = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Universitário! Cadastra-se e ganhe mais cashback',
    bgColor: '#172c4a'
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Compre de quem está perto',
    bgColor: '#6a0159'
  },

  {
    key: String(Math.random()),
    img: img10,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#ba2f76'
  },

  {
    key: String(Math.random()),
    img: img11,
    title: 'Saiba como pagar um boleto com',
    bgColor: '#00ab4b'
  },

  {
    key: String(Math.random()),
    img: img12,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#8367c7'
  },
]

export default function Tips(){
  return(
    <Container>
      {Cardsitems.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Image  source={item.img}/>
        </Option>
  ))}
   </Container>   
  )
}
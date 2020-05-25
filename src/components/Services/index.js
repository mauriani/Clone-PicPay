import React from 'react';
import {ScrollView} from 'react-native';

import { 
  Container, 
  Titulo, 
  Header,
  ContainerLista,
  Image,
  Title,
  SubTitle,
  ContainerText,
  Bloco

} from './styles';

import img1 from '../images/12.png';
import img2 from '../images/06.png';
import img3 from '../images/07.png';
import img4 from '../images/01.png';

import Icon from 'react-native-vector-icons/FontAwesome';

const arrayImagens = [
  {
  key: String(Math.random()),
  titulo: "Pagar nas Maquininhas",
  subTitulo:"Pague com o PicPay em máquina Cielo e Getnet escaneando o QR coode na máquina.",
  image: img1,
  icon: "map-marker"
},
{
  key: String(Math.random()),
  titulo: "Pagar Conta",
  subTitulo:"Pague sua conta de lux, água, boletos bancários etc.",
  image: img2,
  icon: "unlock-alt",
},

{
  key: String(Math.random()),
  titulo: "Cobrar",
  subTitulo:"Cobre um amigo",
  image: img3,
  icon: "unlock-alt",
},
{
  key: String(Math.random()),
  titulo: "Recarga de Celular",
  subTitulo:"Vivo, Claro, Tim, Oi, ALgar, Sercomtel, Correios.",
  image: img4,
  icon: "unlock-alt",
},
]


export default function Services (){
  return(
    <Container>
      <Header>
        <Titulo>Serviços</Titulo>
      </Header>
    
    {arrayImagens.map((item) => (
      <ContainerLista Key={item.key}>
        <Image source={item.image}></Image>
        <ContainerText>
          <Bloco>
            <Title>{item.titulo}</Title>
            <Icon name={item.icon} size={18} color='#c6c6c6'></Icon>
          </Bloco>
          <SubTitle>{item.subTitulo}</SubTitle> 
        </ContainerText>
      </ContainerLista>
    ))}
    </Container>
  )
}
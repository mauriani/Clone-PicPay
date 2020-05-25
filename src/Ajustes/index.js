import React, { Component } from 'react';
import { 
  Container,
  ContainerPerfil,
  CardTop,
  Title,
  CardBody,
  Avatar,
  User,
  Name,
  AcessoPerfil,
  TextConta,
  BlocoInformacoes,
  Info,
  Divider,
  TextInfo,

} from './styles';

import avatar from '../components/images/avatar.png';

const Listinfo = [
  {
    key: String(Math.random()),
    title:'Meu PicPay',
    info: '@mateussilva'

  },
  {
    key: String(Math.random()),
    title:'Meu Número',
    info: '(**)*****-2478'
  },

  {
    key: String(Math.random()),
    title:'Meu E-mail',
    info: 'ma******s*@gamail.com'

  },

  {
    key: String(Math.random()),
    title:'Dados Pessoais',
    info: 'Nome, CPF e data de nascimento'

  },
  {
    key: String(Math.random()),
    title:'Conta Bancária'

  },
  {
    key: String(Math.random()),
    title:'Taxas e limites'
  },

  {
    key: String(Math.random()),
    title:'Meus endereços'
  },

  {
    key: String(Math.random()),
    title:'Meus favoritos'
  },

  {
    key: String(Math.random()),
    title:'Validar identidade'
  },
  
]
export default class Ajustes extends Component{
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  

  render(){
    return(
      <Container>
        <ContainerPerfil>
          <CardTop>
            <Title>Ajuda</Title>
          </CardTop>
          <CardBody>
            <Avatar source={avatar} resizeMode={'contain'}/>
            <User>@mateus.silva</User>
            <Name>Mateus Silva</Name>
            <AcessoPerfil>Ver meu perfil</AcessoPerfil>
          </CardBody>
          <TextConta>Minha Conta</TextConta>
        </ContainerPerfil>

        {Listinfo.map((item) => (
           <BlocoInformacoes key={item.key}>
            <Info>{item.title}</Info>
            <TextInfo>{item.info}</TextInfo>
            <Divider/>
         </BlocoInformacoes>
        ))}
       




      </Container>
    )
  }
}
import React, { Component } from 'react';
import { 
  Container,
  Header, 
  Title,
  MenuTitle,
  Divider,

} from './styles';

import List from '../components/List';


export default class Pagar extends Component{
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  



  render(){
    return(
      <Container>
        <Header>
          <Title>Notificações</Title>
          <MenuTitle>Configurar</MenuTitle>
        </Header>
        <List/>
      </Container>
    )
  }
}
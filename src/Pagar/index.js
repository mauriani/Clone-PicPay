import React, { Component } from 'react';
import {TextInput} from 'react-native';
import { 
  Container, 
  Header, 
  SearchContainer
} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Pagar extends Component{
  constructor(props){
    super(props)
    this.state = {
      switchValue: false 
    }
  }

  


  render(){
    return(
      <Container>
        <Header>
          <IconM name='qrcode-scan' size={32} color={'#2AB451'}/>
            <SearchContainer>

              <Icon name="ios-search" size={30} color="#bebfbc"/>

              <TextInput
                placeholder= "A quem você quer pagar ?"
              />

            </SearchContainer>
        </Header>
      </Container>
    )
  }
}
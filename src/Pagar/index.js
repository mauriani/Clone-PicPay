import React, { Component } from 'react';
import {TextInput, View} from 'react-native';
import { 
  Container, 
  Header, 
  SearchContainer,
  Title,
} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';


import Suggestion from '../components/Suggestion';
import Services from '../components/Services';
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
          <IconM name='qrcode-scan' size={32} color={'#2AB451'}/>
            <SearchContainer>

              <Icon name="ios-search" size={30} color="#bebfbc"/>

              <TextInput
                placeholder= "A quem você quer pagar ?"
              />

            </SearchContainer>
        </Header>
        <View>
          <Title>Principais</Title>
          <Suggestion/>
        </View>
        
       <Services/>
      </Container>
    )
  }
}
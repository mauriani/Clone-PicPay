import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';

import { Container, Header, HeaderSaldo, HeaderTitle, HeaderSubTitle} from './styles';

import Suggestion from '../../src/components/Suggestion';
import Activities from '../../src/components/Activities';
import Tips from '../components/Tips';
export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <Container>
        <ScrollView>
          <Header> 
            <Icon name='qrcode-scan' size={32} color={'#2AB451'}/>
            
            <HeaderSaldo>
              <HeaderTitle>Meu Saldo</HeaderTitle>
              <HeaderSubTitle>R$ 120, 00</HeaderSubTitle>
            </HeaderSaldo>

            <IconM name='person-add' size={32} color={'#2AB451'}/>

          </Header>

          <Suggestion/>
          <Activities/>
          <Tips/>


        </ScrollView>
       
      </Container>
    )
  }
}



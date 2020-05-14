import React, { Component } from 'react';
import { View, Text} from 'react-native';

import { Container } from './styles';

export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <Container>
        <Text>Teste</Text>
      </Container>
    )
  }
}



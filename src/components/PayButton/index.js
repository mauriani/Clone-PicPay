import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import Icons from 'react-native-vector-icons/MaterialIcons';
import {Button, Titulo} from './styles';

export default function PayButton({onPress, focused}){
  return(
    <TouchableWithoutFeedback onPress={onPress}>
       <Button colors = {focused ? ['#fff','#ccc'] : ['#2AB451','#069322'] }>
        <Icons name='attach-money' size={30} color={focused ? '#000' : '#fff'}/>
        <Titulo focused={focused}>Pagar</Titulo>
      </Button>
    </TouchableWithoutFeedback>
  )

}
import React from 'react';
import { Text, TouchableWithoutFeedback} from 'react-native';

import Icons from 'react-native-vector-icons/MaterialIcons';
import {Button} from './styles';

export default function PayButton({onPress, focused}){
  return(
    <TouchableWithoutFeedback onPress={onPress}>
       <Button>
        <Icons name='attach-money' size={30} color={focused ? '#000' : '#fff'}/>
        <Text style={{color:'#fff', fontSize:10}}>Pagar</Text>
      </Button>
    </TouchableWithoutFeedback>
  )

}
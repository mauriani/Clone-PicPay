import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {
  Container, 
  Header, 
  Title, 
  Card, 
  CardHeader, 
  Avatar, 
  Description, 
  Bold, 
  CardBody, 
  Username,
  CardFooter,
  Details,
  Values,
  Divider,
  TextDate,
  Actions,
  Options,
  OptionLabel
} from './styles';


import avatar from '../images/avatar.png'

export default function Activities(){
  return(
   <Container>
     <Header>
        <Title>Atividades</Title>
        <Title>Todas</Title>
     </Header>

     <Card>
       <CardHeader>
         <Avatar source={avatar}/>
         <Description>
           <Bold>Você</Bold> pagoa a <Bold>@mateusSilva</Bold>
         </Description>
       </CardHeader>

       <CardBody>
         <Username>Mateus Silva</Username>
       </CardBody>

       <CardFooter>
         <Details>

           <Values>Pagou 300,00</Values>
           <Divider/>
           <Icon name= "md-lock" size={20} color={'#E1DDD4'}/>
           <TextDate>Há 2 anos</TextDate>

         </Details>

         <Actions>
          <Options>
            <Feather name= "message-square" size={20} color={'#E1DDD4'}/>
            <OptionLabel>0</OptionLabel>
          </Options>

          <Options>
            <Icon name= "ios-heart" size={20} color={'#2AB451'}/>
            <OptionLabel style={{color:'#2AB451'}}>2</OptionLabel>
          </Options>
         </Actions>

        
       </CardFooter>

     </Card>
   </Container>
  )
}
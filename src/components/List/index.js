import React from 'react';
import {ScrollView} from 'react-native';
import {Bloco, Message, Date, Divider} from './styles';

const mensagens = [
  {
  key: String(Math.random()),
  message:'Seu Auxílio Emergêncial no PicPay! Transfira-o para o PicPay e ganhe 5% do dinheiro de volta ao faer suas compras',
  date: '20 de maio ás 13:44',
},
{
  key: String(Math.random()),
  message:'Identificamos um novo acesso á sua conta. Toque aqui para saber mais.',
  date: '14 de maio ás 15:19',
},

{
  key: String(Math.random()),
  message:'Continue doando para as Mães da favela ! Não batemos a meta, mas dobramos o valor doado! Toque aqui para saber mais.',
  date: '14 de maio ás 15:19',
},
{
  key: String(Math.random()),
  message:'Nesse dia especial, doe para as Mães da Favela, se arrecadarmos R$ 1 Milhão Hoje, O PicPay doará mais R$ 1 Milhão.',
  date: '10 de maio ás 12:16',
},

{
  key: String(Math.random()),
  message:'Nesse dia especial, doe para as Mães da Favela, se arrecadarmos R$ 1 Milhão Hoje, O PicPay doará mais R$ 1 Milhão.',
  date: '14 de maio ás 15:19',
},

{
  key: String(Math.random()),
  message:'Nesse dia especial, doe para as Mães da Favela, se arrecadarmos R$ 1 Milhão Hoje, O PicPay doará mais R$ 1 Milhão.',
  date: '14 de maio ás 15:19',
},

]

export default function List (){
  return(
   <ScrollView>
     {mensagens.map((item) =>(
        <Bloco key={item.key}>
          <Message>{item.message}</Message>
          <Date>{item.date}</Date>
          <Divider/>
        </Bloco>
      ))}
   </ScrollView>
      
  )
}
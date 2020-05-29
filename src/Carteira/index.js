import React, { Component } from 'react';


import { Container, 
  Header, 
  BlocoIcon, 
  ButtonIcon, 
  HeaderContainer, 
  BalanceContainer,
  Bold,
  Title,
  ContainerEye,
  TitleSaldo, 
  TitleSub,
  ContainerButtons,
  ButtonActions,
  TitleButton,
  UseSaldo,
  UseTitle,
  PaymentMethods,
  PayTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardBodyTitle,
  Image,
  CardFooter,
  ButtonAdicionar,
  Titulo,
  Codigo,
  CodigoText,

} from './styles';

import { Switch } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconA from 'react-native-vector-icons/AntDesign';



import cartao from '../components/images/credit-card.png';
import { StatusBar } from 'react-native';
export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      switchValue: true,
      isVisible: true,
    }
  }

  onPressVisible = () =>{
    this.setState({
      isVisible: !this.state.isVisible,
    })
  }

onPressSwitchValue = () =>{
  this.setState({
    switchValue: !this.state.switchValue,
  })
}



  render(){
    return(
      <Container>
        <Header
          colors={
            this.state.switchValue ? ['#52EC87','#1AB563'] : ['#d3d3d3','#868686'] 
          }
        >
          <BlocoIcon>
            <ButtonIcon backgroundColor={this.state.switchValue ? '#52EC87': '#d3d3d3'}>
              <Icon name='bar-graph' size={16} color={'#fff'}/>
            </ButtonIcon>
          </BlocoIcon>

          <HeaderContainer>

            <Title>Saldo PicPay</Title>

            <BalanceContainer>

              <TitleSaldo> 
                R$ <Bold>{this.state.isVisible ? '1200,00' : '----'}</Bold>
              </TitleSaldo>

              <ContainerEye onPress={this.onPressSwitchValue}>
                <IconM name={this.state.switchValue ? 'eye': 'eye-off'} color={'#fff'} size={30}/>
              </ContainerEye>

            </BalanceContainer>
            
            <TitleSub>Seu saldo está rendendo 100% CDI</TitleSub>

            <ContainerButtons>

              <ButtonActions>
                <IconI name={'md-cash'} color={'#fff'} size={28}/>
                <TitleButton>Adicionar</TitleButton>
              </ButtonActions>

              <ButtonActions>
                <IconF name={'bank'} color={'#fff'} size={20}/>
                <TitleButton>Retirar</TitleButton>
              </ButtonActions>
            </ContainerButtons>

          </HeaderContainer>

        </Header>

        <UseSaldo>
          <UseTitle>
            Usar saldo ao pagar
          </UseTitle>
          <Switch
            trackColor={{false: "#767577", true: "#52EC87"}}
            thumbColor={this.state.switchValue == false ? "#e7e9e5" : "#1AB563"}
            value={this.state.switchValue} 
            onValueChange ={(switchValue)=>this.setState({switchValue})}
          />
        </UseSaldo>

        <PaymentMethods>
          <PayTitle>
            Formas de Pagamento
          </PayTitle>
        </PaymentMethods>


        <Card>
         <CardBody>
          <CardDetails>
              <CardTitle>
                Cadastre seu cartão de crédito
              </CardTitle>

              <CardBodyTitle>
                  Cadastre um cartão de crédito para pode fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
              </CardBodyTitle>

            </CardDetails>
            
            <Image source={cartao} resizeMode={'contain'}/>
         </CardBody>

         <CardFooter>
           <ButtonAdicionar>
             <IconA name={'pluscircleo'} size={28} color={'#52EC87'}/>
             <Titulo>Adicionar cartão de crédito</Titulo>
           </ButtonAdicionar>
         </CardFooter>
        </Card>


        <Codigo>
          <IconFA name={'money-bill-wave'} size={20} color={'#52EC87'}/>
          <CodigoText>
            Usar código promocional
          </CodigoText>
        </Codigo>

      </Container>
    )
  }
}

import styled from 'styled-components/native';
import LinerGradient from 'react-native-linear-gradient';


export const Container = styled.View`
  flex: 1;
  background-color: #06050B;
`;

export const Header = styled(LinerGradient).attrs({
  start: {x: 1,y: 0.2},
})`
  height: 320px;
`;

export const HeaderContainer = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const BlocoIcon = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top:30px;
  margin-right:5px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  border-radius: 20px;
  border-color: #fff;
  border-width: 2px;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  right: 0px;
  top: 6px;
  align-self: flex-start;
`;



export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;


export const Title = styled.Text`
  font-size: 16px;
  padding: 8px;
  color:#fff;
`;

export const TitleSaldo = styled.Text`
  font-size: 35px;
  color:#fff;
  font-weight: 200;
`;

export const ContainerEye = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const TitleSub = styled.Text`
  font-size: 15px;
  padding: 8px;
  color:#fff;
`;


export const ContainerButtons = styled.View`
  flex-direction: row;
  margin-top: 30px;
  justify-content:space-between;
  align-items: center;
`;


export const ButtonActions = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border-color: rgba(255,255,255,0.8);
  border-width: 2px;
  height: 40px;
  width: 150px;
  margin: 0 10px;
`;

export const TitleButton = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: 10px;
`;

export const UseSaldo = styled.View`
  flex-direction: row;
  height: 60px;
  background-color: #1C1C1E;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const UseTitle = styled.Text`
  font-size: 14px;
  color:#fff;
  font-weight: bold;
`;



export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;

`;

export const PayTitle = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  color: #c6c6c6;

`;


export const Card = styled.View`
  margin-top: 25px;
  background-color: #1e232a;
  border-radius: 10px;
  padding: 15px;
  flex-direction: column;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 25px;
`;


export const CardTitle = styled.Text`
  color: #fff;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;

`;

export const CardBodyTitle = styled.Text`
  color: rgba(255,255,255,0.8);
  font-size: 15px;
  padding: 0 16px;
  margin-top: 12px;
`;


export const Image = styled.Image`
  width: 60px;
`;


export const CardFooter = styled.View`
  padding: 0 16px;
`;

export const ButtonAdicionar = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;

export const Titulo = styled.Text`
  color: #52EC87;
  font-size: 16px;
  margin-left: 10px;
`;


export const Codigo = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 25px;
  align-items:center;
  justify-content: center;

`;

export const CodigoText = styled.Text`
  color: #52EC87;
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
  textDecorationLine: underline;
`;



import styled from 'styled-components/native';
import LinerGradient from 'react-native-linear-gradient';

export const Button = styled(LinerGradient).attrs({
  start: {x: 1,y: 0.2},
})`
  width: 55px;
  height: 55px;
  border-radius: 30px;
  align-items: center;
  justify-content:center;
`;

export const Titulo = styled.Text`
  font-size: 10px;
  color: ${({focused}) => focused ? '#000' : '#fff'}

`;


import styled from 'styled-components/native';
import LinerGradient from 'react-native-linear-gradient';

export const Button = styled(LinerGradient).attrs({
  colors: ['#2AB451','#069322'],
  start: {x: 1,y: 0.2},
})`
  width: 55px;
  height: 55px;
  border-radius: 30px;
  align-items: center;
  justify-content:center;
`;


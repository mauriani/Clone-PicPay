import styled from 'styled-components/native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${50 + getStatusBarHeight(true)}px;
  background-color: #06050B;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row
  justify-content: space-between;

`;

export const HeaderSaldo = styled.View`

`;

export const HeaderTitle = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 12px;

`;

export const HeaderSubTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

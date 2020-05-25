import styled from 'styled-components/native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
  background-color: #06050B;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const MenuTitle = styled.Text`
  font-size: 16px;
  color: #52EC87;
  font-weight: bold;
`;
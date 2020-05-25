import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
  background-color: #06050B;
`;

export const Header = styled.View`
  flex-direction: row;
  height: 50px;
  align-items:center;
  margin-left: 15px;
  margin-bottom: 20px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content:center;
  margin-left: 20px;
  background-color: #fff;
  height: 50px;
  width: 330px;
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
  padding: 0 16px;
  color: #fff;
  font-weight: bold;
`;

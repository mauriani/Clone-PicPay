import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle:{
    padding: 16
  }
}))`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
  background-color: ${({bgColor}) => bgColor}
  width: 150px;
  height: 200px;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const Image = styled.Image`
  align-self: center;
  margin-bottom: 10px;
`;

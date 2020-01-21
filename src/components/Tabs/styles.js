import styled from "styled-components/native";
import { colors } from "../../styles";
export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const Tab = styled.TouchableOpacity`
  background: ${props => (props.active ? colors.red : colors.white)};
  padding: 10px 16px;
  border-radius: 14px;
`;

export const TabText = styled.Text`
  color: ${props => (props.active ? colors.white : colors.black)};
  font-family: "System";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

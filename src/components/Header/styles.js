import styled from "styled-components/native";
import { metrics } from "../../styles";
export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchButton = styled.TouchableOpacity`
  padding: ${metrics.padding}px;
`;

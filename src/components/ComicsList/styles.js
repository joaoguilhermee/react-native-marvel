import styled from "styled-components/native";
import { metrics, colors } from "../../styles";
export const Container = styled.View`
  width: 100%;
`;

export const Wrapper = styled.ScrollView`
  width: 100%;
`;

export const Header = styled.View`
  margin-bottom: 16px;
  flex-direction: row;
`;
export const Title = styled.Text`
  font-weight: 800;
  font-size: 22px;
  line-height: 26px;
`;
export const Loader = styled.ActivityIndicator.attrs({
  color: colors.red,
  size: "small"
})`
  margin-left: 10px;
`;
export const Text = styled.Text``;

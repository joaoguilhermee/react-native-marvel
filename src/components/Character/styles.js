import styled from "styled-components/native";
import { metrics } from "../../styles";

export const Container = styled.View`
  background: #fcfcfc;
  border-radius: 24px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 24px;
  min-height: 212px;
`;
export const MoreInfo = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MoreInfoText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
`;
export const RealName = styled.Text``;
export const Name = styled.Text`
  font-weight: 800;
  font-size: 22px;
  line-height: 26px;
`;
export const Description = styled.Text``;
export const Info = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${metrics.padding}px;
`;
export const Photo = styled.Image``;

import styled from 'styled-components/native';
import { metrics, colors } from '../../styles';

export const Container = styled.View`
  /* padding-bottom: ${metrics.padding}px; */
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const List = styled.FlatList`
  margin-top: ${metrics.padding}px;
  width: 100%;
`;
export const Loader = styled.ActivityIndicator.attrs({
  color: colors.red,
  size: 'large',
})`
  margin: ${metrics.padding}px 0;
`;

import styled, { css } from "styled-components/native";
import { Animated } from "react-native";

export const Container = styled(Animated.View)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
`;

export const Wrapper = styled(Animated.View)`
  bottom: 0;
  position: absolute;
  height: 95%;
  background: #fff;
  width: 100%;
  border-top-left-radius: 20;
  border-top-right-radius: 20;
  overflow: hidden;
`;
export const Content = styled.ScrollView`
  padding: 24px;
`;

export const ShareButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 }
})`
  flex: 0.1;
  text-align: right;
  align-items: center;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom:22px;
`;
export const Name = styled.Text`
  font-family: System;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.666667px;
  flex: 0.9;
  
`;
export const Text = styled.Text``;
export const Photo = styled.Image`
  position: relative;
  z-index: 1;
`;
export const Indicator = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 }
})`
  width: 50;
  position: absolute;
  height: 6;
  z-index: 10;
  background: #000;
  border-radius: 42;
  align-self: center;
  margin-top: 5px;
`;

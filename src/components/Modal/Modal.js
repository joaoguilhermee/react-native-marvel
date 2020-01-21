import React, { useState, useEffect } from "react";
import { Animated, Dimensions } from "react-native";
import { SvgXml } from "react-native-svg";

const { height, width } = Dimensions.get("window");
import {
  Container,
  Wrapper,
  Indicator,
  Photo,
  Content,
  Name,
  Share,
  Header,
  Text
} from "./styles";

import { share } from "../../assets/images/ico-share.svg";
const Modal = ({ show, close, item }) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true
      })
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true
      }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
      Animated.timing(state.container, { toValue: height, duration: 100 })
    ]).start();
  };

  useEffect(() => {
    console.log(show);
    if (show) {
      openModal();
    } else {
      closeModal();
    }
  }, [show]);

  return (
    <Container
      opacity={state.opacity}
      style={[
        {
          opacity: state.opacity,
          transform: [{ translateY: state.container }]
        }
      ]}
    >
      <Wrapper
        style={[
          {
            transform: [{ translateY: state.modal }]
          }
        ]}
      >
        <Indicator onPress={close} />
        {item && (
          <>
            <Photo
              source={{
                uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                width,
                height: 400
              }}
            />
            <Content>
              <Header>
                <Name>{item.name}</Name>
                <Share>
                  <SvgXml xml={share} />
                </Share>
              </Header>
              <Text>{JSON.stringify(item)}</Text>
            </Content>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Modal;

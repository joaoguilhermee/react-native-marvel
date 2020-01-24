import React, { useState, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Share from 'react-native-share';
import ComicsList from '../../components/ComicsList';
const { height, width } = Dimensions.get('window');
import {
  Container,
  Wrapper,
  Indicator,
  Photo,
  Content,
  Name,
  ShareButton,
  Header,
  Text,
} from './styles';
import api from '../../services/api';
import { share } from '../../assets/images/ico-share.svg';
const Modal = ({ show, close, item }) => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
      Animated.timing(state.container, { toValue: height, duration: 100 }),
    ]).start();
  };
  function handleShare(character) {
    if (item) {
      const shareOptions = {
        title: 'Share via',
        url: `reactnativemarvel://character/${item.id}`,
      };
      Share.open(shareOptions);
    }
  }

  useEffect(() => {
    if (show) {
      setComics([]);
      openModal();
    } else {
      closeModal();
    }
  }, [closeModal, openModal, show]);

  async function getData(id) {
    setLoading(true);
    const response = await api.get(`characters/${id}/comics?limit=20`);
    const { status, data } = response;

    if (status === 200 && data) {
      const { results } = data.data;

      if (results) {
        setComics(results);
      }
    }
    setLoading(false);
  }
  useEffect(() => {
    if (item && item.id) {
      getData(item.id);
    }
  }, [item]);

  return (
    <Container
      opacity={state.opacity}
      style={[
        {
          opacity: state.opacity,
          transform: [{ translateY: state.container }],
        },
      ]}
    >
      <Wrapper
        style={[
          {
            transform: [{ translateY: state.modal }],
          },
        ]}
      >
        <Indicator onPress={close} />
        {item && (
          <>
            <Photo
              source={{
                uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                width,
                height: 400,
              }}
            />
            <Content>
              <Header>
                <Name>{item.name}</Name>
                <ShareButton onPress={item => handleShare(item)}>
                  <SvgXml xml={share} />
                </ShareButton>
              </Header>

              <Text>{item.description}</Text>
              <ComicsList loading={loading} comics={comics} />
            </Content>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Modal;

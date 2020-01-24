import React, { useState, useEffect } from 'react';
import { SvgXml } from 'react-native-svg';
import {
  Container,
  Photo,
  Info,
  Name,
  RealName,
  Description,
  MoreInfo,
  MoreInfoText,
} from './styles';

import { link } from '../../assets/images/ico-link.svg';
const Character = ({ item, onPress }) => {
  return (
    <Container
      hide={
        item.thumbnail.path &&
        item.thumbnail.path.substring(
          item.thumbnail.path.lastIndexOf('/') + 1
        ) === 'image_not_available'
      }
    >
      {item.thumbnail && item.thumbnail.path && (
        <Photo
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,

            width: 160,
            height: 212,
          }}
        />
      )}
      <Info>
        <Name>
          {item.name}
          <RealName />
        </Name>
        {item.description !== '' && (
          <Description numberOfLines={4}>{item.description}</Description>
        )}
        <MoreInfo onPress={item => onPress(item)}>
          <MoreInfoText>More info</MoreInfoText>
          <SvgXml xml={link} />
        </MoreInfo>
      </Info>
    </Container>
  );
};
export default Character;

import React, { useState, useEffect } from 'react';

import { Container } from './styles';

const Comic = ({ comic }) => {
  return (
    <Container
      hide={
        comic.thumbnail.path &&
        comic.thumbnail.path.substring(
          comic.thumbnail.path.lastIndexOf('/') + 1
        ) === 'image_not_available'
      }
      source={{
        uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        width: 150,
        height: 200,
      }}
    />
  );
};

export default Comic;

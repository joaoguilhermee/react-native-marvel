import React, { useState, useEffect } from "react";

import { Container } from "./styles";
const Comic = ({ comic }) => {
  return (
    <Container
      source={{
        uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        width: 150,
        height: 200
      }}
    ></Container>
  );
};

export default Comic;

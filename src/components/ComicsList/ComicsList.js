import React, { useState, useEffect } from "react";

import { Container, Wrapper, Header, Title, Loader, Text } from "./styles";
import Comic from "../../components/Comic";
const ComicsList = ({ loading = true, comics }) => {
  return (
    <Container>
      <Header>
        <Title>Comics</Title>
        {loading && <Loader />}
      </Header>
      <Wrapper horizontal={true}>
        {comics.map(comic => (
          <Comic comic={comic} />
        ))}
      </Wrapper>
      {!loading && comics && comics.length === 0 && <Text>Nothig</Text>}
    </Container>
  );
};

export default ComicsList;

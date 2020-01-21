import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { Container, List, Loader } from "./styles";
import Character from "../Character";

const CharactersList = ({ loading, characters, loadMore }) => {
  return (
    <Container>
      {characters && characters.length > 0 && (
        <List
          onEndReached={() => loadMore()}
          onEndReachedThreshold={0.25}
          renderItem={({ item }) => <Character item={item} />}
          keyExtractor={item => item.id}
          data={characters}
        />
      )}
      {loading && <Loader />}
    </Container>
  );
};
export default CharactersList;

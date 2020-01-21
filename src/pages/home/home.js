/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Text, StatusBar } from "react-native";
import { Container } from "./styles";
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Text>Marvel APP</Text>
      </Container>
    </>
  );
};

export default App;

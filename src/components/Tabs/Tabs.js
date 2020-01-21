/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";

import { Container, Tab, TabText } from "./styles";
const Tabs = ({ tabs, active, onPress }) => {
  return (
    <Container>
      {tabs.map(tab => (
        <Tab onPress={() => onPress(tab.id)} active={tab.id === active}>
          <TabText active={tab.id === active}>{tab.name}</TabText>
        </Tab>
      ))}
    </Container>
  );
};

export default Tabs;

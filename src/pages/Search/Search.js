/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from "react";
import { Text, StatusBar, Linking } from "react-native";
import { Container, Wrapper } from "./styles";
import api from "../../services/api";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Modal from "../../components/Modal";
import CharactersList from "../../components/CharactersList";

const Search = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Container>
        <Header />
      </Container>

      {/* <Modal show={modal} item={character} close={() => setModal(false)} /> */}
    </>
  );
};

export default Search;

Search.navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;
  return {
    headerShown: false
  };
};

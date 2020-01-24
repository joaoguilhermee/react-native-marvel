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

const Home = ({ navigation }) => {
  const [tab, setTab] = useState("popular");
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(null);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const perPage = 20;
  async function getData() {
    setLoading(true);

    const response = await api.get(
      `characters?limit=${perPage}&offset=${
        page > 1 ? perPage * (page - 1) : 0
      }${search && `&nameStartsWith=%${search}`}`
    );
    const { status, data } = response;

    if (status === 200 && data) {
      const { results } = data.data;
      if (results) setCharacters([...characters, ...results]);
    }
    setLoading(false);
  }
  function loadMore() {
    setPage(page + 1);
  }
  useEffect(() => {
    getData();
  }, [page]);

  useEffect(async () => {
    try {
      const url = await Linking.getInitialURL();
      if (url) navigate(url);
    } catch (error) {}
    return;
  }, []);

  async function navigate(url) {
    const route = url.replace(/.*?:\/\//g, "");
    const id = route.match(/\/([^\/]+)\/?$/)[1];

    const response = await api.get(`characters/${id}?limit=1`);
    const { status, data } = response;

    if (status === 200 && data) {
      const { results } = data.data;
      if (results) {
        onPress(results[0]);
      }
    }
  }
  function onPress(item) {
    if (item) {
      setModal(true);
      setCharacter(item);
    }
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Container>
        <Wrapper>
          <Header navigation={navigation} />
          <Tabs
            tabs={[
              { name: "A-Z", id: "az" },
              { name: "Z-A", id: "za" },
              { name: "Last viewed", id: "last-viewed" }
            ]}
            active={tab}
            onPress={current => setTab(current)}
          />
          <CharactersList
            loading={loading}
            loadMore={() => loadMore()}
            onPress={item => onPress(item)}
            onClose={() => setModal(false)}
            characters={characters}
          />
        </Wrapper>
      </Container>

      <Modal show={modal} item={character} close={() => setModal(false)} />
    </>
  );
};

export default Home;

Home.navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;
  return {
    header: null
  };
};

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from "react";
import { Text, StatusBar } from "react-native";
import { Container, Wrapper } from "./styles";
import api from "../../services/api";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import CharactersList from "../../components/CharactersList";

const Home = () => {
  const [tab, setTab] = useState("popular");
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const perPage = 20;
  async function getData() {
    setLoading(true);
    const response = await api.get(
      `characters?limit=${perPage}&offset=${
        page > 1 ? perPage * (page - 1) : 0
      }${search && `&nameStartsWith=${search}`}`
    );
    const { status, data } = response;

    if (status === 200 && data) {
      const { results } = data.data;
      if (results) setCharacters([...characters, ...results]);
    }
    setLoading(false);
  }
  function loadMore() {
    console.tron.log("LOADMOIRE", characters);
    setPage(page + 1);
  }
  useEffect(() => {
    getData();
  }, [page]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Wrapper>
          <Header />
          <Tabs
            tabs={[
              { name: "Popular", id: "popular" },
              { name: "A-Z", id: "az" },
              { name: "Last viewed", id: "last-viewed" }
            ]}
            active={tab}
            onPress={current => setTab(current)}
          />
          <CharactersList
            loading={loading}
            loadMore={() => loadMore()}
            characters={characters}
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;

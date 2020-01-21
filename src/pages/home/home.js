/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from "react";
import { Text, StatusBar } from "react-native";
import { Container, Wrapper } from "./styles";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";

const Home = () => {
  const [tab, setTab] = useState("popular");
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
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { SvgXml } from "react-native-svg";

import { Container, SearchButton } from "./styles";
import { logo } from "../../assets/images/logo.svg";
import { search } from "../../assets/images/ico-search.svg";

const Header = () => {
  return (
    <Container>
      <SvgXml style={{ marginLeft: -10 }} xml={logo} />
      <SearchButton onPress={() => {}}>
        <SvgXml xml={search} />
      </SearchButton>
    </Container>
  );
};

export default Header;

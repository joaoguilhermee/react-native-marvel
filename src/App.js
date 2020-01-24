/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const Router = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      path: "character/:id"
    },
    Search: Search
  })
);

const prefix =
  Platform.OS === "ios"
    ? "reactnativemarvel://"
    : "reactnativemarvel://reactnativemarvel/";

//reactnativemarvel://character/1011334
const App = () => {
  return <Router uriPrefix={prefix} />;
};

export default App;

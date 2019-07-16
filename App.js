/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import AppNav from "./App/Router/navigator";

// const App = () => {
//   return <AppNavigator />;
// };

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AppNav />;
  }
}

export default App;

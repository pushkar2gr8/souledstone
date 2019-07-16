import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Image, Text, View } from "react-native";
import { commonStyles } from "../Themes/styles";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.navigation);
    setTimeout(() => {
      this.props.navigation.replace("home");
    }, 3000);
  }

  render() {
    return (
      <SafeAreaView style={commonStyles.mainContainer}>
        <Text>{"Wait for 3 seconds..."}</Text>
      </SafeAreaView>
    );
  }
}

export default SplashScreen;

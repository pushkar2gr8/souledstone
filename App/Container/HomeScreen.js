import React, { Component } from "react";
import { SafeAreaView, TouchableOpacity, Text, Image } from "react-native";
import { commonStyles } from "../Themes/styles";
import { images } from "../Themes/images";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={commonStyles.mainContainer}>
        <TouchableOpacity
          style={commonStyles.catagoryButton}
          onPress={() => this.props.navigation.navigate("list")}
        >
          {/* <ImageType /> */}
          <Text style={commonStyles.catagoryText}>{"Shirts"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={commonStyles.catagoryButton}
          onPress={() => this.props.navigation.navigate("list")}
        >
          {/* <ImageType /> */}
          <Text style={commonStyles.catagoryText}>{"pants"}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

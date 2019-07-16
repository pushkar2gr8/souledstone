import React, { Component } from "react";
import { SafeAreaView, TouchableOpacity, Text, Image } from "react-native";
import { commonStyles } from "../Themes/styles";
import { images } from "../Themes/images";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderButton = (text, ImageType) => {
    return (
      <TouchableOpacity style={commonStyles.catagoryButton}>
        <ImageType />
        <Text style={commonStyles.catagoryText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={commonStyles.mainContainer}>
        {this.renderButton("Shirts", <Image source={images.headerLeft} />)}
        {this.renderButton("Pants", <Image source={images.headerLeft} />)}
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

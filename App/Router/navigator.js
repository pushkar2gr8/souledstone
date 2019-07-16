import React from "react";
import { Image, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../Container/HomeScreen";
import { commonStyles } from "../Themes/styles";
import { commonText } from "../Themes/text";
import { images } from "../Themes/images";
import SplashScreen from "../Container/SplashScreen";

const splashScreen = navigation => <SplashScreen navigation={navigation} />;

const homeScreen = navigation => <HomeScreen navigation={navigation} />;

const listScreen = navigation => <HomeScreen navigation={navigation} />;

splashScreen.navigationOptions = {
  header: null
};

homeScreen.navigationOptions = navigation => {
  return {
    // headerTitle: (
    //   <Text style={commonStyles.mediumText}>{commonText.headerTitle}</Text>
    // ),
    headerLeft: (
      <Image style={commonStyles.headerLeft} source={images.headerLeft} />
    ),
    headerRight: (
      <Image style={commonStyles.headerRight} source={images.headerRight} />
    )
  };
};

listScreen.navigationOptions = navigation => {
  return {
    // headerTitle: (
    //   <Text style={commonStyles.mediumText}>{commonText.headerTitle}</Text>
    // ),
    headerLeft: (
      <Image style={commonStyles.headerLeft} source={images.headerLeft} />
    ),
    headerRight: (
      <Image style={commonStyles.headerRight} source={images.headerRight} />
    )
  };
};

const AppNavigator = createStackNavigator({
  launch: { screen: splashScreen },
  home: { screen: homeScreen },
  list: { screen: homeScreen }
});

const AppNav = createAppContainer(AppNavigator);
export default AppNav;

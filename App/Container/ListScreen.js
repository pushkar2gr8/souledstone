import React, { Component } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { commonStyles } from "../Themes/styles";
import { images } from "../Themes/images";
import {} from "react-native-gesture-handler";
import { colors } from "../Themes/colors";
import { source } from "../lib/source";

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: source
    };
    this.fetchData();
  }

  fetchData = async () => {
    const respose = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    ).then(data => data.json());
    this.setState({ isLoading: false });
  };

  renderItem = (data, index) => {
    return (
      <View style={listStyles.itemContainer} key={index}>
        <Image style={{ height: 80, width: 80 }} source={{ uri: data.url }} />
        <Text
          style={commonStyles.mediumText}
          ellipsizeMode={"tail"}
          numberOfLines={1}
        >
          {data.title}
        </Text>
      </View>
    );
  };

  render() {
    if (this.state.data.length === 0) {
      return (
        <View style={commonStyles.mainContainer}>
          <ActivityIndicator size={"large"} color={colors.blackColor} />
        </View>
      );
    } else {
      return (
        <SafeAreaView style={commonStyles.mainContainer}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }, index) => this.renderItem(item, index)}
            ItemSeparatorComponent={() => <View style={listStyles.seperator} />}
          />
        </SafeAreaView>
      );
    }
  }
}

const listStyles = StyleSheet.create({
  seperator: {
    height: 1,
    margin: 2,
    backgroundColor: colors.blackColor
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default ListScreen;

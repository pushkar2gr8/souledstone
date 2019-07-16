import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const commonStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  catagoryButton: {
    width: "100%",
    height: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    margin: 5,
    borderRadius: 8
  },
  catagoryText: {
    fontSize: 16,
    color: "#fff"
  },
  smallText: {
    width: "100%",
    fontSize: 10,
    color: colors.blackColor
  },
  mediumText: {
    width: "100%",
    fontSize: 14,
    color: colors.blackColor
  },
  largeText: {
    width: "100%",
    fontSize: 16,
    color: colors.blackColor
  },
  headerLeft: {
    height: 30,
    width: 30
  },
  headerRight: {
    height: 30,
    width: 30
  }
});

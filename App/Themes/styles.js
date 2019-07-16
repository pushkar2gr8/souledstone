import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const commonStyles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  catagoryButton: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "flex-start"
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

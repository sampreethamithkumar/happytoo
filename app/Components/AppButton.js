import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import color from "../config/color";

function AppButton({ title, onPress, buttonStyle, textStyle }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.button, ...buttonStyle }}
    >
      <Text style={{ ...styles.text, ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    width: "80%",
    height: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    position: "absolute",
    top: "25%",
    alignSelf: "center",
  },
});

export default AppButton;

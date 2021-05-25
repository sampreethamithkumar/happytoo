import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import color from "../config/color";

export default function AppTextInput({
  textValue,
  onChangeText,
  placeholder,
  textType,
}) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onChangeText}
      style={styles.input}
      placeholder={placeholder}
      value={textValue}
      secureTextEntry={textType === "password" ? true : false}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 25,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    fontSize: 20,
    textTransform: "lowercase",
  },
});

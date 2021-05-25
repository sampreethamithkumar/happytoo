import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import AppButton from "../Components/AppButton";
import color from "../config/color";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/delivery-boy.jpg")}
      style={styles.background}
    >
      <Image
        source={require("../assets/happy-too-delivery-logo.png")}
        style={styles.logo}
      />
      <AppButton
        title="Login"
        onPress={() => navigation.navigate("Login")}
        buttonStyle={{ ...styles.loginButton }}
        textStyle={{ ...styles.loginText }}
      />
      <AppButton
        title="Register"
        onPress={() => navigation.navigate("Register")}
        buttonStyle={{ ...styles.registerButton }}
        textStyle={{ ...styles.registerText }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    width: "70%",
    height: 120,
    position: "absolute",
    top: 200,
  },
  loginButton: {
    position: "absolute",
    top: 600,
    backgroundColor: color.primary,
  },
  loginText: {
    color: color.black,
  },
  registerButton: {
    position: "absolute",
    top: 700,
    backgroundColor: "#615d5d",
  },
  registerText: {
    color: color.white,
  },
});

export default WelcomeScreen;

import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import color from "../config/color";
import registerUser from "../services/registerUserService";
import validateUser from "../models/userValidation";

export default function RegisterScreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [validate, setValidate] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  const onSubmit = async () => {
    const { error } = validateUser(email, password);
    if (error) {
      setValidate(error.details[0].message);
      return;
    } else {
      setValidate("");
    }

    try {
      await registerUser(email, password);
      setRegisterMessage("User registered successfully!!");
    } catch (e) {
      setRegisterMessage("");
      setValidate("User Already registered!!");
    }
  };

  return (
    <View>
      <AppTextInput
        onChangeText={setemail}
        placeholder="Email Id"
        textValue={email}
      />
      <AppTextInput
        onChangeText={setpassword}
        placeholder="Password"
        textValue={password}
        textType="password"
      />
      <AppButton
        title="Login"
        onPress={onSubmit}
        buttonStyle={{ ...styles.loginButton }}
        textStyle={{ ...styles.loginText }}
      />
      <Text style={styles.errorMessage}>{validate}</Text>
      <Text style={styles.successMessage}>{registerMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: color.primary,
  },
  loginText: {
    color: color.black,
  },
  errorMessage: {
    textAlign: "center",
    color: color.red,
  },
  successMessage: {
    textAlign: "center",
    color: color.green,
  },
});

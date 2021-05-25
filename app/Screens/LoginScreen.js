import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import color from "../config/color";
import signIn from "../services/userLoginService";
import validateUser from "../models/userValidation";

export default function LoginScreen({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [validate, setValidate] = useState("");

  const onSubmit = async () => {
    const { error } = validateUser(email, password);
    if (error) {
      setValidate(error.details[0].message);
      return;
    } else {
      setValidate("");
    }

    try {
      await signIn(email, password);
      navigation.navigate("Dashboard");
    } catch (e) {
      setValidate("Invalid Email or password.");
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
});

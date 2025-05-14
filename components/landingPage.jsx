import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { defaultStyles } from "../constants/Styles";

const landingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require("../assets/images/chef.png")}
          style={styles.icon}
        />
        <Text style={styles.textLogin}>RecipeRealm</Text>
      </View>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome back</Text>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          autoCapitalize="none"
          placeholder="Email"
          style={styles.inputField}
          // value={email}
          // onChangeText={setEmail}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="Password"
          style={styles.inputField}
          // value={password}
          // onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.greyText}> Don't have an account? </Text>
        <Text style={styles.blueText}> Signup </Text>
      </View>
      <TouchableOpacity style={[defaultStyles.btn, styles.btnPrimary]}>
        <Text style={styles.btnPrimaryText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default landingPage;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 75,
    display: "flex",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: 'center'
  },
  textLogin: {
    color: "#000",
    fontWeight: "800",
    fontSize: 34,
    textDecorationLine: "underline",
  },
  icon: {
    height: 48,
    width: 48,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    alignSelf: "center",
    marginVertical: 20,
    height: 90,
    width: 154,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  inputField: {
    marginVertical: 4,
    height: 65,
    borderWidth: 1,
    borderColor: "#ED541C",
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#fff",
    minWidth: "80%",
  },
  greyText: {
    color: "#707070",
    fontSize: 18,
  },
  blueText: {
    color: "#06f",
    fontSize: 18,
    fontWeight: 500,
  },
  btnPrimary: {
    backgroundColor: "#ED541C",
    marginVertical: 4,
  },
  btnPrimaryText: {
    color: "#fff",
    fontSize: 16,
  },
});

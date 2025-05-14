import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const landingPage = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor="#fff"/>
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
        <Text style={styles.text}>Buenaz diaz mi amigo</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default landingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignSelf: "center",
    padding: 20,
  },
  textLogin: {
    fontWeight: "800",
    fontSize: 34,
    textDecorationLine: "underline",
  },
  icon: {
    height: 48,
    width: 48,
  },
  row: {
    marginTop: 55,
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
});

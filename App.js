import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to EnvisionIQ</Text>
      <ActivityIndicator size="large" color="purple" animating={true} />
      <Button
        title="Get quote"
        onPress={() => {
          console.log("Button pressed");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

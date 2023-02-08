import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={style.container}>
      <Text>Login Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

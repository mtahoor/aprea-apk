import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function Second({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{ alignItems: "center", justifyContent: "center", flex: 1.7 }}
      >
        <Image source={require("../../assets/Images/useage.png")} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>How to Use?</Text>
      </View>
      <StatusBar style="auto" />

      <Text
        style={{
          marginHorizontal: 70,
          textAlign: "center",
          flex: 1,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("login");
          }}
          style={{
            backgroundColor: "#27AE60",
            borderRadius: 10,
            paddingHorizontal: "35%",
            paddingVertical: 10,
          }}
        >
          <Text style={{ color: "white" }}>Proceed</Text>
        </Pressable>
        <Pressable
          style={{ marginVertical: 20 }}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Splash() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image
          source={require("./../assets/Images/Aprea.png")}
          style={styles.image}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.msg}>ALL PAKISTAN REAL ESTATE ASSOCIATION</Text>
        <Text style={styles.msgarea}>بسم اللہ الرحمن الرحیم</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27AE60",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {},
  msg: {
    color: "white",
    fontSize: 30,
    marginHorizontal: "10%",
  },
  msgarea: {
    color: "white",
    fontSize: 32,
    marginHorizontal: "10%",
    marginTop: 50,
  },
});

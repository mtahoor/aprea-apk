import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/Images/Aprea.png")}
        style={styles.image}
      />
      <View>
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
      justifyContent: "flex-start",
    },
    image: {
      marginTop: 250,
      marginBottom: 50,
    },
    msg: {
      color: "white",
      fontSize:32,
      marginHorizontal:100,
      marginTop:50,
    },
    msgarea: {
      color: "white",
      fontSize:32,
      marginHorizontal:70,
      marginTop:50,
    },
  });

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={style.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Image source={require("../../assets/Images/green_logo.png")} />
        <Text style={{ paddingTop: "13%", fontSize: 25, color: "#00AA4B" }}>
          Login to your account
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <View
          style={{
            flex: 1,
            alignContent: "flex-start",
            justifyContent: "center",
          }}
        >
          <TextInput
            placeholder="CNIC"
            keyboardType="numeric"
            style={{
              marginVertical: "10%",
              borderBottomColor: "#00AA4B",
              borderBottomWidth: 1,
              fontSize: 25,
            }}
          />
          <TextInput
            placeholder="Password"
            style={{
              paddingRight: "60%",
              borderBottomColor: "#00AA4B",
              borderBottomWidth: 1,
              fontSize: 25,
            }}
          />
          <Pressable style={{ alignItems: "flex-end" }}>
            <Text>Forgot Password?</Text>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable
            onPress={()=>{navigation.navigate('role')}}
            style={{
              marginBottom: "10%",
              backgroundColor: "#27AE60",
              borderRadius: 30,
              paddingHorizontal: "35%",
              paddingVertical: 10,
            }}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </Pressable>
          <View style={{ flexDirection: "row", marginBottom:'10%' }}>
            <Text>Don't have an account?</Text>
            <Pressable>
              <Text style={{ fontWeight: "bold", color: "#00AA4B" }}>
                Sign Up
              </Text>
            </Pressable>
          </View>
          <Pressable>
            <Text style={{color:'#7C7C7C'}}>Continue as a Guest</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

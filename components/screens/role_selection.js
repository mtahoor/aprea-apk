import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function Role({ navigation }) {
  return (
    <View
      style={{
        flex: 4,
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 50,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{fontSize:30,fontWeight:'bold'}}>Chose Account Type</Text>
      </View>
      <Pressable
        onPress={()=>{navigation.navigate('dev_main')}}
        style={{
          backgroundColor: "#017AFF",
          flex: 1,
          justifyContent: "space-evenly",
          margin: '2%',
          width: "100%",
          alignItems: "center",
          borderRadius: 20,
        }}
      >
        <Image source={require('../../assets/logo/developer.png')}/>
        <Text style={style.whitetext}>Developer</Text>
        <Text style={{color:'white'}}>Sell your off-plan project</Text>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: "#01694F",
          flex: 1,
          justifyContent: "space-evenly",
          margin: '2%',
          width: "100%",
          alignItems: "center",
          borderRadius: 20,
        }}
      >
        <Image source={require('../../assets/logo/agent.png')}/>
        <Text style={style.whitetext}>Real Estate Agents</Text>
        <Text style={{color:'white'}}>Sign-up and get free listing credits</Text>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: "#FFD100",
          flex: 1,
          justifyContent: "space-evenly",
          margin: '2%',
          width: "100%",
          alignItems: "center",
          borderRadius: 20,
        }}
      >
        <Image source={require('../../assets/logo/user.png')}/>
        <Text style={{fontSize:22,fontWeight:"bold"}}>Super User</Text>
        <Text style={{textAlign:'center'}}>Landlords- Tenants - Buyers -Sellers Investors</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  whitetext: {
    color: "white",
    fontSize:22,
    fontWeight:"bold",
  },
});

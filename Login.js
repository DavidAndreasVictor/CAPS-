import React, { Component } from "react";
import {View,Text,StyleSheet,Image,TouchableHighlight,TextInput, Alert} from "react-native";

class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
      super(props);
      this.state = {username: '',password: '',};
  }
  Login= () =>{
    if(this.state.username == 'david' && this.state.password == '123'){
      this.props.navigation.navigate('Usia')
    }else{
      Alert.alert('Masukan username dan password dengan benar!');
    }
  }
    render() {
        return (
          <View style={styles.containerMain}>
            <TouchableHighlight activeOpacity={0.5} style={styles.button3Style} onPress={() => this.Login()}>
                    <Text style={styles.buttonText}>?</Text>
                </TouchableHighlight>
            <View style={styles.box2}>
              <View>
                <Image source={require("./img/IMG_9851.jpg")} style={styles.image} />
              </View>
            </View>            
              <Text style={styles.Judul}>CAPS!</Text>
              <Text style={styles.Text}>Absen Dosen</Text>
                <View style={styles.textInput}>
                    <TextInput style={{textAlign: 'left', color: 'black'}} placeholder=" Username " onChangeText={(username) => this.setState({ username })}/>
                </View>
                <View style={styles.textInput}>
                    <TextInput style={{textAlign: 'left', color: 'black'}} placeholder=" Password "onChangeText={(password) => this.setState({ password })}/>
                </View>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.Login()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
            <View style={styles.box3}>
                
            </View>
          </View>
          
        );
    }
}
// define your styles
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    backgroundColor: 'yellow',
  },
  headerBar: {
    backgroundColor: "#880E4F",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 10,
    paddingTop: 10,
    position: "relative",
    borderRadius: 5,
  },
  image: {
    height: 200,
    width: 300,
    
  },
  Judul: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 160,
    color: "#5E2E62",
    fontSize: 25
  },
  Text: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "#5E2E62",
    fontSize: 18
  },
  buttonStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#FF80AB",
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    width: "45%",
    borderRadius: 5,
  },
    button2Style: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "white",
    marginTop:20,
    marginBottom: 20,
    height: 40,
    width: 150,
    borderRadius: 5
  },
    button3Style: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "white",
    marginTop:20,
    marginBottom: 20,
    marginLeft: 300,
    height: 50,
    width: 50,
    borderRadius: 100
  },
  buttonText: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 18
  },
  box1: {
    backgroundColor: 'white',
    marginTop:150,
    height: 200,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 5,
  },
  box2: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    marginBottom:60,
    flexDirection: "column",
    alignItems: "center"
  },
  box3: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 120,
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    backgroundColor: "#880E4F",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 10, 
    paddingTop: 10,
},
textHeader: {
    fontSize:20,
    color: "#fff",
    textAlign: "center"
  },
textInput: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderColor: '#7C3B81',
    borderWidth: 1,
    justifyContent: 'center',
    height: 35,
    width: 230,
    marginTop: 10,
    borderRadius: 5,
},
});
export default Login;
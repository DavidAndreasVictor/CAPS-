import React, { Component } from "react";
import {View,Text,StyleSheet,Image,TouchableHighlight,TextInput, Alert} from "react-native";

class Login extends Component {
    static navigationOptions = {
        header: null
    }
    
    render() {
        return (
          <View style={styles.containerMain}>            
            <View style={styles.box1}>
              <Text style={styles.Text}>Selamat Datang Di CAPS!!</Text>
            </View>
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}>
              <Text style={styles.buttonText}>Daftar Absen</Text>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.5} style={styles.button3Style}>
              <Text style={styles.buttonText}>QR Scanner</Text>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableHighlight>
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
    backgroundColor: 'lightblue',
  },
  header: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 30, 
    paddingTop: 100,
    marginTop: 70
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
    marginTop:80,
    marginBottom: 20,
    height: 90,
    width: 200,
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
      height: 90,
      width: 200,
      borderRadius: 5
  },
  buttonText: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "black",
    fontSize: 18
  },
  box1: {
    backgroundColor: 'white',
    marginTop:35,
    height: 75,
    width: 325,
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
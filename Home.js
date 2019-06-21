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
    render() {
        return (
          <View style={styles.containerMain}>
            
               
            <View style={styles.box2}>
              <View>
              <Text style={styles.Judul}>     SELAMAT DATANG DI</Text>
              <Text style={styles.Judul1}>                   CAPS!</Text>
                <Image source={require("./img/caps.png")} style={styles.image} />
              </View>
            </View>            
            <View style={styles.box4}>
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.props.navigation.navigate('DaftarDos')}>
                    <Text style={styles.buttonText}>DAFTAR ABSEN</Text>
                </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.props.navigation.navigate('Scanner')}>
                    <Text style={styles.buttonText}>QR SCANNER</Text>
                </TouchableHighlight>
               
                 </View> 
            <View style={styles.box3}>
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>LOGOUT</Text>
                </TouchableHighlight>  
                
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
    height: 300,
    width: 300,
    marginBottom: 50,
    
  },
  Judul: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 58,
    color: "black",
    fontSize: 25
  },
  Judul1: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 5,
    color: "black",
    fontSize: 25
  },
  Text: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 400,
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
    marginTop:2,
    marginBottom: 2,
    marginLeft: 7,
    marginRight: 7,
    height: 67,
    width: 145,
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
    marginBottom: 4,
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
    color: "black",
    fontSize: 14.2
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
    marginTop: 1,
    marginBottom:60,
    flexDirection: "column",
    alignItems: "center"
  },
  box3: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 60,
    flexDirection: "column",
    alignItems: "center"
  },
  box4: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 449,
    marginBottom:30,
    flexDirection: "row",
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
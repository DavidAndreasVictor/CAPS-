import React, { Component } from "react";
import {View,Text,StyleSheet,Image,TouchableHighlight,TextInput, Alert} from "react-native";
class Login extends Component {
    static navigationOptions = {
        header: null
    }
    
    render() {
        return (
          <View style={styles.containerMain}>
            <TouchableHighlight activeOpacity={0.5} style={styles.button3Style} onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.buttonText2}>BACK</Text>
            </TouchableHighlight>
            <View style={styles.box1}>
              <Text style={styles.Text}>DAFTAR ABSEN</Text>
              
            </View>
            <Text style={styles.buttonText}> </Text>

            <Text style={styles.buttonText}>David  Andreas Victor</Text>
              <Text style={styles.buttonText}>Herry Vipassana Sanjaya</Text>
              <Text style={styles.buttonText}>Ketut Yogi Surya Dharma</Text>
              <Text style={styles.buttonText}>Suzuki Honda Yamaha</Text>
            <View style={styles.box4}>
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}>
                    <Text style={styles.buttonText}>TAMBAH</Text>
                </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} >
                    <Text style={styles.buttonText}>EDIT DATA</Text>
                </TouchableHighlight>
               
                 </View> 
                 <View style={styles.box5}>
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} >
                    <Text style={styles.buttonText}>HAPUS AJA</Text>
                </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} >
                    <Text style={styles.buttonText}>HAPUS SEMUA</Text>
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
  Text2: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "#5E2E62",
    fontSize: 10
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
  box4: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 53,
    marginBottom:30,
    flexDirection: "row",
    alignItems: "center"
  },
  box5: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 4,
    marginBottom:48,
    flexDirection: "row",
    alignItems: "center"
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
    height: 30,
    width: 130,
    marginLeft: 7,
    marginRight: 7,
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
    marginRight: 250,
    height: 25,
    width: 100,
    borderRadius: 5
  },
  buttonText: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "black",
    fontSize: 12
  },
  buttonText2: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "black",
    fontSize: 12
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
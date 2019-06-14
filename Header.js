import React from 'react';
import {Text,View} from 'react-native';

const Header = (props) => {
    const { text, header } = styles;
    return (
        <View style={header}>
          <Text style={styles.text}> UTS Aplikasi Mobile Widyanti Dwi Putri 1715051050{props.judul} </Text>
        </View>
    );
};
const styles = {
  header: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 10, 
    paddingTop: 10,
  },
  text: {
    fontSize:12,
    color: "#fff",
    textAlign: "center"
  }
};
export default Header;
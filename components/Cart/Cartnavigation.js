import React from 'react';
import {View,Text,StyleSheet} from "react-native";
  
 class Cartnavigation extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Cart</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  export default Cartnavigation;
import React from 'react';
import {View,Text,StyleSheet} from "react-native";
  
 class Popularnavigation extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Popular</Text>
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
  export default Popularnavigation;
import React from 'react';
import { View,StyleSheet } from "react-native";
import { Input,Button } from 'react-native-elements';
 class Accountnavigation extends React.Component {
    render() {
      return (
        <View>
            
             <View style={{flexDirection: 'row',justifyContent:'center'}}>
             <Button style={styles.Button}
              title="Login"
              type="outline"/>  
             </View>
             <Input
              placeholder='Mobile Number.'/>

             <Input
              placeholder='Password'/>
             <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
             <Button style={styles.Button}
              title="Login"
              type="solid"/>
             <Button style={styles.Button}
              title="ForgetPassword.?"
              type="clear"/>
             </View>
        
        <View style={{flexDirection: 'row',justifyContent:'center'}}>
        <Button style={styles.Button}
         title="Register"
         type="outline"/>
         </View>
           
           <Input
            placeholder='User Name'/>

           <Input
            placeholder='Mobile Number'/>

           <Input
            placeholder='Password'/>
            
           <Input
            placeholder='Delivery Address'/>
             <View style={{flexDirection: 'row',justifyContent:'center'}}>
             <Button style={styles.Button}
              title="Register"
              type="solid"/>
              </View>
              </View>
        
      );
    }
  }
  const styles = StyleSheet.create({
  
       Button: {
       height:10,
        width:20,
      padding:5,
  marginRight:20
 }
})
  
  export default Accountnavigation;
import React, { Component } from "react";
import {View,StyleSheet,SafeAreaView,ScrollView,Dimensions,TouchableOpacity} from "react-native";
import { Container, Content, List, ListItem, Left, Body, Thumbnail, Text,Button} from 'native-base';
import {Card} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import {  widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


const { height, width } = Dimensions.get('window')
class Hometemp extends Component {
    state={isFocused:false,
        isClicked:'rice',
        clicks:0
       }
    
        handleSubmit(event){
         // this.setState({isClicked1:true});
console.log(event);
       switch(event){
       case 'rice':
       console.log('save');
      
         return(
        
          <View style={{}}>
         <List>
            <ListItem avatar>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgub0Qx-cwzk4spmt3OnZNnAKRkHk5AVytmuaG8Ef2gDDlXROaZw' }} />
              </Left>
              <Body>
                <Text>Raw Rice Ponni</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{ textDecorationLine: 'line-through' }}>Rs.75</Text>
                <Text>Rs.65</Text>
             
                </View>
                <View style={{flexDirection:'row',   minWidth:wp('8%')}}>
                <Icon name="ios-information-circle" size={27} />
                <View style={{paddingLeft:wp('4%')}}>
                <Icon name="ios-heart-empty" size={27} />
                </View>
                <View style={{flexDirection:'row',paddingLeft:wp('38%')}}>
                <View style={{flexDirection:'row',paddingLeft:wp('2%')}}>
                {this.state.clicks?<TouchableOpacity onPress={() =>this.setState({clicks: this.state.clicks - 1})}>
                <Icon name="ios-remove-circle" size={27} />
                </TouchableOpacity>:<Text></Text>}
                </View>
                <View style={{flexDirection:'row',paddingLeft:wp('2%'),paddingTop:hp('0.4%')}}>
                <Text> { this.state.clicks ?  this.state.clicks : '1' }</Text>
                </View>
                <TouchableOpacity onPress={() =>this.setState({clicks: this.state.clicks + 1})}>
                <Icon name="ios-add-circle" size={27} />
                </TouchableOpacity>
                </View>
                </View>
              </Body>
            </ListItem>
            </List>
       </View>
     
)
         case 'Oil':
          return(
    <Container>
    <View>
    <List>
    <ListItem avatar>
  
  <Body>
  <Text>Oil</Text>
  <Text note>1-Ltr</Text>

 </Body>
  </ListItem>
 </List>
 </View>
 </Container>
   )
//    default:
//    return(
//     <View style={{backgroundColor:'red'}}>
//     <Text>HI</Text>
//  </View>
//   )
  }
       
        }
        // handleSubmit2=event=>{
        //   this.setState({isClicked2:true});
       
        // }
        // handleSubmit3=event=>{
        //   this.setState({isClicked3:true});
       
        // }
        // handleSubmit4=event=>{
        //   this.setState({isClicked4:true});
       
        // }

  
    
      handleFocus=event=>{
        this.setState({isFocused:true});
    
        if(this.props.onFocus)
          this.props.onFocus(event)
      }
    render() {
        const{isFocused}=this.state;
        const {onFocus}=this.props;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView
                        scrollEventThrottle={16}>
                         
                       
                            <View style={{justifyContent: "space-between", marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                
                                <TouchableOpacity onPress={()=>{
                                  this.setState({isClicked:'rice'})
                                }} >
                                 <Card>
                                 <Body>
                                 <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREGC_BlPgj8VGJJzsmlD3OHa2Nv5uDPUPdJFRbIVXb8eezd6Up' }} />
                                 <Text >Rice</Text>
                                

                                 </Body>
                                 </Card>
                                 </TouchableOpacity>
                                 <TouchableOpacity onPress={()=>{
                                  this.setState({isClicked:'Oil'})
                                }} >
                                 <Card style={styles.cards}>
                                 <Body>
                                 <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyETJg-qQQLtdxoieKnA8cPiL8xo_Dzk5HHoQmpkLYfBoOUB1' }} />
                                 <Text>Oil</Text>
                                 </Body>
                                 </Card>
                                 </TouchableOpacity>
                                 <Card>
                                 <Body>
                                 <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjq6E5lD096mZVT91odXssJm92Gs-0rg1jdvHnqaYtCC-yGFsYNA' }} />
                                 <Text >Dhal</Text>
                                 </Body>
                                 </Card>
                                 <Card>
                                 <Body>
                                 <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjq6E5lD096mZVT91odXssJm92Gs-0rg1jdvHnqaYtCC-yGFsYNA'}}/>
                                 <Text >Dry-Fruits</Text>
                                 </Body>
                                 </Card>
                                </ScrollView>
                               
                            </View>
                            {this.handleSubmit(this.state.isClicked)} 
                    </ScrollView>
                     
            </SafeAreaView>
        );
    }
}
export default Hometemp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cards:{
      borderColor:'transparent'
    }
   
});
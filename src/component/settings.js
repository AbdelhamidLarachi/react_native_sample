import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Animated, Alert, Dimensions} from 'react-native';
import { Body, Container} from 'native-base';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')


export default class Settings extends Component {
  

  constructor(props) {
    super(props);
  }

componentDidMount(){
}


      render(){
        return(
           <Text>Settings</Text>
        );
    }
}

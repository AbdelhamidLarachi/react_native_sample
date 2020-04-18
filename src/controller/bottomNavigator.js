import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { SafeAreaView } from 'react-native';

  import settings from '../component/settings';
  import Home from '../component/home';
  import Notes from '../component/notes';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  
  export default class bottomNavigator extends React.Component {
    render() {
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#004880'}}>
          <BottomContainer/>
          </SafeAreaView>
      );
    }
  }

const bottomTabNavigator = createBottomTabNavigator({

  settings: {
    screen: settings,
    navigationOptions: {
      headerShown: false,
      tabBarLabel: 'Settings', 
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="account-settings" color={tintColor} size={25} />
            )
  }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
      tabBarLabel: "Expenses", 
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome5 name="file-contract" color={tintColor} size={25} />
            )
  }
  },
  Notes: {
    screen: Notes,
    navigationOptions: {
    headerShown: false,
    tabBarLabel: 'Notes', 
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="bookmark-multiple" color={tintColor} size={25} />
            )
  }
  },
},
{
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: 'white', 
      inactiveTintColor: '#bfbfbf',
      activeBackgroundColor: '#004880',
      inactiveBackgroundColor: '#004880',
      safeAreaInset: { bottom: 'never', top: 'never' },  // <-- remove save area bottom padding blank (only iPhone X)
    },
});

const BottomContainer = createAppContainer(bottomTabNavigator);

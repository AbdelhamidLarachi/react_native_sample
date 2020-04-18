import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

  import Register from '../component/registration';
  import bottomNavigator from './bottomNavigator';
  import Login from '../component/login';

const RootStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
  }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
  }
  },
  Home: {
    screen: bottomNavigator,
    navigationOptions: {
      headerShown: false,
      gesturesEnabled: false
  }
  }
});



const CurrentScreen = createAppContainer(RootStack);


export default CurrentScreen;
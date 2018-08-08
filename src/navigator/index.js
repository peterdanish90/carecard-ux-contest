import { createStackNavigator } from 'react-navigation';
// Import cards
import ChooseAvatar from '../cards/ChooseAvatar';
import MyMood from '../cards/MyMood';

  // Manifest of possible screens
const RootNavigator = createStackNavigator({
  ChooseAvatar: { screen: ChooseAvatar },
  MyMood: { screen: MyMood },
}, {
initialRouteName: 'ChooseAvatar',
headerMode: 'none',
});
  
export default RootNavigator;
  
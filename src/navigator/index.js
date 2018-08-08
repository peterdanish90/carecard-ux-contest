import { createStackNavigator } from 'react-navigation';
// Import cards
import ChooseAvatar from '../cards/ChooseAvatar';
import MyMood from '../cards/MyMood';
import ActiveMood from '../cards/ActiveMood';
import Reward from '../cards/Reward';
import MyBalance from '../cards/MyBalance';

  // Manifest of possible screens
const RootNavigator = createStackNavigator({
  ChooseAvatar: { screen: ChooseAvatar },
  MyMood: { screen: MyMood },
  ActiveMood: { screen: ActiveMood },
  Reward: { screen: Reward },
  MyBalance: { screen: MyBalance },
}, {
  initialRouteName: 'ChooseAvatar',
  headerMode: 'none',
});
  
export default RootNavigator;
  
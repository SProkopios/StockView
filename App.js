import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Frontpage from './components/frontpage';
import Search from './components/search';
import FakebuysList from './components/fakebuysList';
import { Icon } from '@rneui/themed';
import styles from './utils/styles';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={Frontpage} options={{tabBarIcon: ({ color }) => (
        <Icon containerStyle={styles.icons} name="home" color={"black"} />
      )}} />
      <Tab.Screen name="Search" component={Search} options={{tabBarIcon: ({ color }) => (
        <Icon containerStyle={styles.icons} name="search" color={"black"} />
      )}}/>
      <Tab.Screen name="Fakebuys" component={FakebuysList} options={{tabBarIcon: ({ color }) => (
        <Icon containerStyle={styles.icons} name="assignment" color={"black"} />
      )}}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
  }
  

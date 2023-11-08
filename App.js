import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import { Icon } from '@rneui/themed';
import styles from './styles';
import StockGraph from './StockGraph';


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Tab1} options={{tabBarIcon: ({ color }) => (
          <Icon containerStyle={styles.icons} name="home" color={"black"} />
        )}} />
        <Tab.Screen name="Search" component={StockGraph} options={{tabBarIcon: ({ color }) => (
          <Icon containerStyle={styles.icons} name="search" color={"black"} />
        )}}/>
        <Tab.Screen name="Stock" component={Tab3} options={{tabBarIcon: ({ color }) => (
          <Icon containerStyle={styles.icons} name="assignment" color={"black"} />
        )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
  }
  

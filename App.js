import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailsPokemonScreen from './src/screen/DetailsPokemonScreen';
import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import PokemonScreen from './src/screen/PokemonScreen';
import HomeStackScreen from './src/screen/HomeScreen';
import FavoriteScreen from './src/screen/FavoriteScreen';
//import {IconHeader} from './src/features/iconHeader';

function IconHeader() {
  return (
      <Image
          style={{ width: 180, height: 65, marginTop: 10, marginBottom: 25 }}
          source={require('./assets/Pokemon_logo.png')}
      />
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Details') {
              iconName = focused 
                ? 'ios-person' 
                : 'ios-person-outline';
            } else if (route.name === 'Favorite') {
              iconName = focused 
              ? 'ios-star' 
              : 'ios-star-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            height: 110,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{header: () => null}} />
        <Tab.Screen name="Details" component={DetailsScreen} options={{header: () => null}} /> 
        <Tab.Screen name="Favorite" component={FavoriteScreen} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}
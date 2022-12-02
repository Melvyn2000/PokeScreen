import React from 'react';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function TestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Test !</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Test page" onPress={() => navigation.navigate('Test')} />
      </View>
    );
}

function HomeStackScreen() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Home" component={HomeScreen}/>             
     <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
   );
 }

export default HomeStackScreen;
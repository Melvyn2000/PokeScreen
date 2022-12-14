import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      console.log(value);
      return value;
    //   if(value !== null) {
    //     // value previously stored
    //   }
    } catch(e) {
        console.log(e);
    }
}

function Test () {
    return (
        <Text>Test</Text>
    );
}

function FavoriteScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Favorite Screen</Text>
        <Test />
        <Button onPress={getData} title="GetData" ></Button>
      </View>
    );
}

export default FavoriteScreen;
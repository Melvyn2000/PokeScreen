import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        console.log('Le Pokémon '+value+' est en favoris');
      } else {
        console.log('Aucun Pokémon en favoris')
      }
    } catch(e) {
        console.log(e);
    }
}

// function Test () {
//     return (
//         <Text>bgfez</Text>
//     );
// }

function FavoriteScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Favorite Screen</Text>
        <Button onPress={getData} title="GetData" ></Button>
      </View>
    );
}

export default FavoriteScreen;
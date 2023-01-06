import React, {useState, useEffect} from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function FavoriteScreen () {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let arrayPokemon = [];
    try {
      arrayPokemon = await AsyncStorage.getAllKeys()
    } catch(e) {
      console.log(e);
    }
    let arrayResult = [];
    if(arrayPokemon.length > 0) {
      console.log('Il y a des Pokémons en favoris !');
      for (var i = 0; i < arrayPokemon.length; i++) {
        console.log(arrayPokemon[i]);
        fetch(`https://pokeapi.co/api/v2/pokemon/${arrayPokemon[i]}`)
        .then(res => res.json())
        .then(details => setDetails(details.species));
        arrayResult = details
      }
      console.log(arrayResult);
    } else {
      console.log('Aucun Pokémon en favoris')
    }
  }

  const getAllKeys = async () => {
    let string = []
    try {
      string = await AsyncStorage.getAllKeys()
    } catch(e) {
      console.log(e);
    }
    console.log(string);
    console.log(string.length);
    for (var i = 0; i < string.length; i++) {
      console.log('keys : '+string[i]);
    }
  }

  console.log(details);

  return (
      <View>
        <ScrollView>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             {arrayResult.map(pokemon => {
              return (
                <TouchableOpacity>
                  <ImageBackground source={require('./../../assets/adaptive-icon.png')} >
                    <Image
                      style={{width: 150, height: 150}}
                      source={{
                        uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                          pokemon.name
                        }.png`,
                      }}
                    />
                    <Text style={{ fontFamily: 'FredokaOne', fontSize: 20, textAlign: 'center' }}>{pokemon.name}</Text>
                  </ImageBackground>
                </TouchableOpacity>
              );
            })}
            {/* <Text>{details.name}</Text> */}
            <Button onPress={getData} title="GetData"></Button>
            <Button onPress={getAllKeys} title="getAllKeys"></Button>
          </View>
        </ScrollView>
      </View>
    );
}

export default FavoriteScreen;
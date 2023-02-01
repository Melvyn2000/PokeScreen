import React, {useState, useEffect} from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, Image, ScrollView, StyleSheet } from 'react-native';
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
      console.log('Il y a '+arrayPokemon.length+' Pokémons en favoris !');
      let testPokemon = [];
      for (var i = 0; i < arrayPokemon.length; i++) {
        console.log(arrayPokemon[i]);
        const value = await AsyncStorage.getItem(arrayPokemon[i])
        const content = JSON.parse(value);
        testPokemon.push(content);
      }
      console.log(testPokemon);
      setDetails(testPokemon);
      // for (var i = 0; i < arrayPokemon.length; i++) {
      //   console.log(i+')'+arrayPokemon[i]);
      //   fetch(`https://pokeapi.co/api/v2/pokemon/${arrayPokemon[i]}`)
      //   .then(res => res.json())
      //   .then(details => setDetails(details.species));
      //   console.log(details);
      //   if (details.length !== 0) {
      //     arrayResult.push(details);
      //   } else {
      //     console.log('Le tableau de récupération des pokémons est nul !')
      //   }
      // }
      // console.log(arrayResult);
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

  // console.log('-------------------');
  // console.log(testPokemon);

  return (
      <View>
        <ScrollView>
          <Button onPress={getData} title="Actualiser mes favoris"></Button>
          <View style={styles.container}>
            {details.map(pokemon => {
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
          </View>
        </ScrollView>
      </View>
    );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    //marginTop: 30,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: 'black',
    marginHorizontal: 10,
    marginVertical: 10,
    //backgroundColor: 'white',
    borderRadius: 20,
  }
});
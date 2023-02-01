import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailsPokemonScreen = props => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    //console.log(props.route);
    const {pokemon : pokemonName} = props.route.params;
    //console.log(pokemonName);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => res.json())
      .then(details => setDetails(details));
  };

  const storeData = async () => {
    const {pokemon : pokemonName} = props.route.params;
    console.log(details.species);
    try {
      const jsonValue = JSON.stringify(details.species)
     await AsyncStorage.setItem(pokemonName, jsonValue)
    } catch (e) {
      console.log(e);
    }
    console.log('Pokémon enregistré !');
  }

  const removeValue = async () => {
    const {pokemon : pokemonName} = props.route.params;
    try {
      await AsyncStorage.removeItem(pokemonName)
    } catch(e) {
      console.log(e);
    }
    console.log('Pokémon supprimé !');
  }

  return details.name ? (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image
        style={styles.image}
        source={{
          uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
            details.name
          }.png`,
        }}
      />
      <Text style={styles.text}>Name: {details.name}</Text>
      <Text style={styles.text}>Height: {details.height}</Text>
      <Text style={styles.text}>Weight: {details.weight}</Text>
      <Text style={styles.text}>
        Ability: {details.abilities[0].ability.name}
      </Text>
      <Text style={styles.text}>Type: {details.types[0].type.name}</Text>
      <Button
        onPress={storeData}
        title="Add to favorite"
        color="#841584"
      >
      </Button>
      <Button
        onPress={removeValue}
        title="Remove to favorite"
        color="#841584"
      >
      </Button>
    </View>
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="#E63F34" />
    </View>
  );
};

export default DetailsPokemonScreen;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
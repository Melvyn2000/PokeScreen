import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toaster } from './../components/DetailsPokemonScreen/Toaster';
import { useFonts } from 'expo-font';


const DetailsPokemonScreen = props => {
  const [details, setDetails] = useState([]);
  const [isToasterStoreData, setIsToasterStoreData] = React.useState(false);
  const [isToasterRemoveValue, setIsToasterRemoveValue] = React.useState(false);


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
    setIsToasterStoreData(!isToasterStoreData);
  }

  const removeValue = async () => {
    const {pokemon : pokemonName} = props.route.params;
    try {
      await AsyncStorage.removeItem(pokemonName)
    } catch(e) {
      console.log(e);
    }
    console.log('Pokémon supprimé !');
    setIsToasterRemoveValue(!isToasterRemoveValue);
  }

  const [fontsLoaded] = useFonts({
    'FredokaOne': require('./../../assets/fonts/Pokemon-Solid.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  };

  console.log(details.types);

  if (details.types) {
    if (details.types[0].type.name == 'grass') {
      var colorType = 'grass';
    } else if (details.types[0].type.name == 'fire') {
      var colorType = 'fire';
    } else if (details.types[0].type.name == 'water') {
      var colorType = 'water';
    } else if (details.types[0].type.name == 'bug') {
      var colorType = 'bug';
    }
  }

  console.log(colorType);

  return details.name ? (
    <View style={{flex: 1, alignItems: 'center'}}>
      { (colorType == 'grass') ? 
      <View
        style={styles.backgroundPokemonGrass}
      >
        <Image
          style={styles.image}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
              details.name
            }.png`,
          }}
        />
        <Text 
          style={{
            marginTop: -25,
            fontFamily: 'FredokaOne',
            fontSize: 30,
            color: 'white',
            letterSpacing: 2,
            textTransform: 'capitalize',
          }}
        >
          {details.name}
        </Text>
        <View style={{backgroundColor:'pink', width: '30%',}}>
          <Text style={{
            marginVertical: -20,
            width: 60,
            textAlign: 'center',
            padding: 5,
            color: 'white',
            borderColor: 'white',
            textTransform: 'capitalize',
            borderWidth: 1,
            borderRadius: 15,
            borderRadius: 15,
          }}>{details.types[0].type.name}</Text>
        </View>
      </View>
      : (colorType == 'fire') ?
      <View
        style={styles.backgroundPokemonFire}
      >
        <Image
          style={styles.image}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
              details.name
            }.png`,
          }}
        />
        <Text 
          style={{
            marginTop: -25,
            fontFamily: 'FredokaOne',
            fontSize: 30,
            color: 'white',
            letterSpacing: 2,
            textTransform: 'capitalize',
          }}
        >
          {details.name}
        </Text>
        <View style={{backgroundColor:'pink', width: '30%',}}>
          <Text style={{
            marginVertical: -20,
            width: 60,
            textAlign: 'center',
            padding: 5,
            color: 'white',
            borderColor: 'white',
            textTransform: 'capitalize',
            borderWidth: 1,
            borderRadius: 15,
            borderRadius: 15,
          }}>{details.types[0].type.name}</Text>
        </View>
      </View>
      : (colorType == 'water') ?
      <View
        style={styles.backgroundPokemonWater}
      >
        <Image
          style={styles.image}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
              details.name
            }.png`,
          }}
        />
        <Text 
          style={{
            marginTop: -25,
            fontFamily: 'FredokaOne',
            fontSize: 30,
            color: 'white',
            letterSpacing: 2,
            textTransform: 'capitalize',
          }}
        >
          {details.name}
        </Text>
        <View style={{backgroundColor:'pink', width: '30%',}}>
          <Text style={{
            marginVertical: -20,
            width: 60,
            textAlign: 'center',
            padding: 5,
            color: 'white',
            borderColor: 'white',
            textTransform: 'capitalize',
            borderWidth: 1,
            borderRadius: 15,
            borderRadius: 15,
          }}>{details.types[0].type.name}</Text>
        </View>
      </View>
      :
      <View
        style={styles.backgroundPokemonBug}
      >
        <Image
          style={styles.image}
          source={{
            uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
              details.name
            }.png`,
          }}
        />
        <Text 
          style={{
            marginTop: -25,
            fontFamily: 'FredokaOne',
            fontSize: 30,
            color: 'white',
            letterSpacing: 2,
            textTransform: 'capitalize',
          }}
        >
          {details.name}
        </Text>
        <View style={{backgroundColor:'pink', width: '30%',}}>
          <Text style={{
            marginVertical: -20,
            width: 60,
            textAlign: 'center',
            padding: 5,
            color: 'white',
            borderColor: 'white',
            textTransform: 'capitalize',
            borderWidth: 1,
            borderRadius: 15,
            borderRadius: 15,
          }}>{details.types[0].type.name}</Text>
        </View>
      </View>
      }

      <View
        style={{
          marginVertical: 30,
        }}
      >
        <Text style={styles.text}>Height: {details.height}</Text>
        <Text style={styles.text}>Weight: {details.weight}</Text>
        <Text style={styles.text}>
          Ability: {details.abilities[0].ability.name}
        </Text>
      </View>
      <Button
        onPress={storeData}
        title="Add to favorite"
        color="#841584"
      >
      </Button>
      {isToasterStoreData && <Toaster option={'add'} />}
      {isToasterRemoveValue && <Toaster option={'delete'} />}
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
    height: 150,
    // backgroundColor: 'red',
  },
  text: {
    fontSize: 22,
    marginBottom: 15,
    fontSize: 17,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundPokemonGrass: {
    width: '135%',
    height: 260,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'green',
    borderBottomRightRadius:  250,
    borderBottomLeftRadius: 250,
  },
  backgroundPokemonFire: {
    width: '135%',
    height: 260,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'red',
    borderBottomRightRadius:  250,
    borderBottomLeftRadius: 250,
  }, 
  backgroundPokemonWater: {
    width: '135%',
    height: 260,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderBottomRightRadius:  250,
    borderBottomLeftRadius: 250,
  },
  backgroundPokemonBug: {
    width: '135%',
    height: 260,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    borderBottomRightRadius:  250,
    borderBottomLeftRadius: 250,
  }
});
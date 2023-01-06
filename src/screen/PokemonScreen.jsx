import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from 'react-native';
import DetailsPokemonScreen from './DetailsPokemonScreen';
import { useFonts } from 'expo-font';

const Pokemons = props => {
    const [pokemons, setPokemons] = useState([]);
    const [searchfield, setSearchfield] = useState('');
  
    useEffect(() => {
      fetchPokemons();
    }, []);
  
    const fetchPokemons = () => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => response.json())
        .then(pokemons => setPokemons(pokemons.results));
        //console.log(pokemons);
    };

    const [fontsLoaded] = useFonts({
      'FredokaOne': require('./../../assets/fonts/FredokaOne-Regular.ttf'),
    });
    if (!fontsLoaded) {
      return null;
    }

    console.log(pokemons);
  
    return (
      <View>
        {/* <View style={styles.searchCont}>
          <TextInput
            style={styles.searchfield}
            placeholder="Search Pokemons"
            onChangeText={value => setSearchfield(value)}
            value={searchfield}
          />
        </View> */}
        <ScrollView>
          <View style={styles.container}>
            {pokemons
              .filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
              )
              .map((pokemon, index) => {
                return (
                  // <TouchableOpacity
                  //   activeOpacity={0.5}
                  //   key={index}
                  //   style={styles.card}
                  //   onPress={() => {
                  //     props.navigation.navigate('DetailsPokemonScreen', {
                  //       pokemon: pokemon.name,
                  //     })
                  //   }
                     
                  //   }>
                  //   <Image
                  //     style={{width: 150, height: 150}}
                  //     source={{
                  //       uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                  //         pokemon.name
                  //       }.png`,
                  //     }}
                  //   />
                  //   <Text>{pokemon.name}</Text>
                  // </TouchableOpacity>
                  <TouchableOpacity
                  key={index}
                    style={styles.card}
                    activeOpacity={0.5}
                    onPress={() => {
                      props.navigation.navigate('DetailsPokemonScreen', {
                        pokemon: pokemon.name,
                      })}
                  }>
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
};

export default Pokemons;

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
    },
    searchCont: {
      position: 'absolute',
      marginBottom: 70,
      zIndex: 1,
      marginTop: 10,
      width: '100%',
      alignSelf: 'stretch',
      alignItems: 'center',
    },
    searchfield: {
      height: 40,
      borderWidth: 1,
      backgroundColor: 'white',
      borderColor: '#000',
      textAlign: 'center',
      width: 250,
      borderRadius: 50,
    },
});
import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from 'react-native';
import DetailsPokemonScreen from './DetailsPokemonScreen';
import { useFonts } from 'expo-font';
import { TypeOfPokemons } from '../components/PokemonScreen/TypeOfPokemons';

const Pokemons = props => {
    const [pokemons, setPokemons] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [typeOfPokemons, setTypeOfPokemons] = useState([]);
  
    useEffect(() => {
      fetchPokemons();
    }, []);
  
    const fetchPokemons = () => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then(pokemons => setPokemons(pokemons.results));
        // console.log(pokemons);

        // pokemons.map(pokemon, id => {
        //   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        //     .then(response => response.json())
        //     .then(json => setPokemons(json.types[0]));
        // })
        // console.log(pokemons);
    }

    const test = (pokemonName) => {
      // return pokemonName;
      // console.log(pokemonName);
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then(json => {
         return json.types[0].type.name;
      })
    }

    const [fontsLoaded] = useFonts({
      'FredokaOne': require('./../../assets/fonts/Pokemon-Solid.ttf'),
    });
    if (!fontsLoaded) {
      return null;
    };

    // console.log(pokemons);
    
    return (
      <View>
        <View style={styles.searchCont}>
          <TextInput
            style={styles.searchfield}
            placeholder="Search Pokemons"
            onChangeText={value => setSearchfield(value)}
            value={searchfield}
          />
        </View>
        <ScrollView>
          <View style={styles.container}>
            {
              !pokemons ? '' :
              pokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
              )
              .map((pokemon, index) => {
                let typePokemon = [];
                // console.log(test(pokemon.name));
                // À l'intérieur de cette boucle
                // Essayer de faire appel à une fonction en passant le paramètre "pokemon.name"
                // En faisant retourner le résultat ici pour ensuite effectuer la condition d'affichage de chaque card en fonction du résultat retourner par la fonction

                // typePokemon = fetch(pokemon.url)
                //   .then(response => response.json())
                //   .then(json => {
                //     console.log(json.types[0].type.name);
                // });

                // let resultDetailsOfPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                // console.log('test test test');

                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.card}
                    activeOpacity={0.5}
                    onPress={() => {
                      props.navigation.navigate('DetailsPokemonScreen', {
                        pokemon: pokemon.name,
                      })}
                  }>
                    <ImageBackground 
                      source={require('./../../assets/background-battle.png')} 
                      imageStyle={{ borderRadius: 20}}
                      style={{ 
                        // backgroundColor: 'green',
                        width: '100%', 
                        display: 'flex', 
                        flexDirection: 'row', 
                        justifyContent: 'space-evenly', 
                        alignItems: 'center', 
                        // marginHorizontal: 10,
                        marginBottom: 10,
                        marginVertical: 10,
                        shadowColor: '#171717',
                        shadowOffset: {width: -2, height: 4},
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                      }}
                    >
                    <Image
                      style={{
                        width: 150,
                        height: 150,
                        top: 15,
                        left: 15,
                      }}
                      source={{
                        uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                          pokemon.name
                        }.png`,
                      }}
                    />
                    <Text style={{ 
                            fontFamily: 'FredokaOne', 
                            fontSize: 20, 
                            textAlign: 'center', 
                            color: 'black', 
                            marginLeft: 10,
                            textTransform: 'capitalize',
                            letterSpacing: 2,
                            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',

                            // backgroundColor: 'blue'
                      }}>
                        {pokemon.name}
                    </Text>
                    {/* <Text>{typeOfPokemons.types[0].type.name}</Text> */}
                    </ImageBackground>
                  </TouchableOpacity>
                  // <TouchableOpacity
                  //   key={index}
                  //   style={styles.card}
                  //   activeOpacity={0.5}
                  //   onPress={() => {
                  //     props.navigation.navigate('DetailsPokemonScreen', {
                  //       pokemon: pokemon.name,
                  //     })}
                  // }>
                  //   <ImageBackground source={require('./../../assets/adaptive-icon.png')} >
                  //     <Image
                  //       style={{width: 100, height: 100}}
                  //       source={{
                  //         uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${
                  //           pokemon.name
                  //         }.png`,
                  //       }}
                  //     />
                  //     <Text style={{ fontFamily: 'FredokaOne', fontSize: 20, textAlign: 'center' }}>{pokemon.name}</Text>
                  //   </ImageBackground>
                  // </TouchableOpacity>
                );
              })
            }
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
      marginTop: 50,
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // borderBottomWidth: 1,
      // borderBottomColor: 'black',
      marginHorizontal: 10,
      marginVertical: 20,
      width: '80%',
      height: 125,
      // backgroundColor: 'red',
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
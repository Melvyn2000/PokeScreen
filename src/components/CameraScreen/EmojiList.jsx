import { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji, setEmoji] = useState([]);

  useEffect(() => {
    fetchPokemons();
    // fetchPokemonDetails();
  }, []);

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(emoji => setEmoji(emoji.results));
  };

emoji.map(pokemon => {
    console.log(pokemon.name);
})
//   const fetchPokemonDetails = () => {
//     //console.log(props.route);
//     const {pokemon : pokemonName} = props.route.params;
//     //console.log(pokemonName);
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//       .then(res => res.json())
//       .then(details => setDetails(details));
//   };

// console.log(emoji);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}>
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
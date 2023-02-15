import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from 'react-native';

export const TypeOfPokemons = (name) => {
    console.log(name);

    const [typeOfPokemons, setTypeOfPokemons] = useState([]);

    useEffect(() => {
        fetchTypeOfPokemons();
      }, []);

    const fetchTypeOfPokemons = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name['name']}`)
        .then(res => res.json())
        .then(typeOfPokemons => setTypeOfPokemons(typeOfPokemons));
    }

    //console.log(typeOfPokemons.types[0].type.name);

    // if (typeOfPokemons.name) {
    //     return typeOfPokemons.types[0].type.name;
    // } else {
    //     return null;
    // }

    return typeOfPokemons.name ? (
        <Text>{typeOfPokemons.types[0].type.name}</Text>
    ) : (
        <Text>{'/'}</Text>
    );
};
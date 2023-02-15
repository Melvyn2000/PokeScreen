import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import Pokemons from './PokemonScreen';
import DetailsPokemonScreen from './DetailsPokemonScreen';

const Stack = createNativeStackNavigator();

// function TestScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
//       <Text>Test !</Text>
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button title="Go to Test page" onPress={() => navigation.navigate('Test')} />
//       </View>
//     );
// }

// function IconHeader() {
//   return (
//       <Image
//           style={{ width: 180, height: 65, marginTop: 10, marginBottom: 25 }}
//           source={require('./../../assets/Pokemon_logo.png')}
//           resizeMode='contain'
//       />
//   );
// }

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 200,
        },
      }}
    >
     {/* <Stack.Screen name="Pokemons" component={Pokemons} options={{ headerTitle: () => <IconHeader /> }}/>    */}
     <Stack.Screen name="Pokemons" component={Pokemons} options={{ title: 'PokeScreen' }} />                       
     {/* <Stack.Screen name="DetailsPokemonScreen" component={DetailsPokemonScreen} options={{ headerTitle: () => <IconHeader /> }}/> */}
     <Stack.Screen name="DetailsPokemonScreen" component={DetailsPokemonScreen} options={{ title: 'Pokémon' }}/>
    </Stack.Navigator>
   );
 }

 export default HomeStackScreen;

// Importation App.js de PokeAppTest
// const appNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: Pokemons,
//     },
//     DetailsPokemonScreen: {
//       screen: DetailsPokemonScreen,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );

// const AppContainer = createAppContainer(appNavigator);

// class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// export default App;
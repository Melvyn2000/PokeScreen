import React from 'react';
import {View, Text} from 'react-native';
import Animated,{FadeInUp,FadeOutUp} from 'react-native-reanimated';

export const Toaster = (option) => {
    console.log('1 : '+option['option']);
    console.log('2 : '+option);
    if (option == 'add' || option['option'] == 'add') {
        var response = 'Ajouté aux favoris ! ✅';
    } else if (option == 'delete' || option['option'] == 'delete') {
        var response = 'Supprimé des favoris ! ❌';
    }
    console.log('Lancement de la fonction Toaster')
    return (
     <Animated.View
        entering={FadeInUp}
        exiting={FadeOutUp}
        style={{
          width: "90%",
          backgroundColor: "#c41c1ccc",
          position: "absolute",
          padding: 10,
          alignItems: "center",
          top: 10,
          left: 20,
          right: 20,
          borderRadius: 8
        }}
    >
        <Text style={{color: 'white', fontSize: 24}}>{response}</Text>
      </Animated.View>
    );
  };
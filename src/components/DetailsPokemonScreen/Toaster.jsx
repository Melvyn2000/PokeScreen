import React from 'react';
import {View, Text} from 'react-native';
import Animated,{FadeInUp,FadeOutUp} from 'react-native-reanimated';

export const Toaster = () => {
    return (
     <Animated.View
        entering={FadeInUp}
        exiting={FadeOutUp}
        style={{
          width: "90%",
          backgroundColor: "#c41c1ccc",
          position: "absolute",
          padding: 20,
          alignItems: "center",
          top: 100,
          left: 20,
          right: 20,
          borderRadius: 8
        }}
      >
        <Text style={{color: 'white', fontSize: 24}}>{"Pokémon ajouté au favoris ! ✅"}</Text>
      </Animated.View>
    );
  };
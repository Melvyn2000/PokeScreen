import React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="Go to Test" onPress={() => navigation.navigate('Test')} />
      </View>
    );
}

export default DetailsScreen;
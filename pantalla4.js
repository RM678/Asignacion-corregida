import * as React from 'react';
import { View, Text,Button } from 'react-native';

export function CuatroScreen({ navigation, titulo }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{titulo} @cuatro</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Cinco')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

export function CincoScreen({ navigation, titulo }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{titulo} @5</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Inicio')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
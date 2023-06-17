import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {CuatroScreen, CincoScreen} from './pantalla4';
import Lista from './Lista';
import Barcode from './Barcode';
import ImagePickerExample from './assets/Verimagen';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pantalla principal</Text>
      <Button
        title="Ir a detalle"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalles</Text>
      <Button title="Go to Tres" onPress={() => navigation.navigate('Tres')} />
      
    </View>
  );
}

function TresScreen({ navigation, titulo }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{titulo}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Inicio')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Details" component={ImagePickerExample} />
        <Stack.Screen name="Cinco" component={CincoScreen} />
        {/* <Stack.Screen name="Tres" component={TresScreen} /> */}
        <Stack.Screen name="Tres">
          {(props)=><CuatroScreen {...props} titulo={'Pantalla tres nueva'}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
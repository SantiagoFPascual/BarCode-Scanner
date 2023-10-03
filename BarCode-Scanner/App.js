
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen1 from './src/screens/Screen1';

import EscanerScreen from './screens/Escaner';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Escaner"
          screenOptions={{
          orientation: 'portrait',
          headerShown: false
        }}>        
        <Stack.Screen
          name="Escaner"
          component={EscanerScreen}
          options={{title: 'Escaner'}}
        />
        <Stack.Screen name="Escaner" component={EscanerScreen} />
        <Stack.Screen name="Screen1" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

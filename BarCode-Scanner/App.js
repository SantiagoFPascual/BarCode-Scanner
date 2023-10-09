
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inicio from './screens/Inicio';
import Escaner from './screens/Escaner';
import CrearCodigo from './screens/CrearCodigo'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
          screenOptions={{
          orientation: 'portrait',
          headerShown: false
        }}>        
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{title: 'Inicio'}}
        />
          <Stack.Screen name="CrearCodigo" component={CrearCodigo} />
          <Stack.Screen name="Escaner" component={Escaner} />
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

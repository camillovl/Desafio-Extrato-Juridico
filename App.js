import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import Name_screen from 'C:/Users/Camillo/Documents/Mobile Projects/Desafio-Extrato-Judiciario/Simple_Form/App/screens/Name_screen.js';
import Email_screen from 'C:/Users/Camillo/Documents/Mobile Projects/Desafio-Extrato-Judiciario/Simple_Form/App/screens/Email_screen.js';
import Cep_screen from './App/screens/Cep_screen';
import Final_screen from './App/screens/Final_screen';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Name_screen" component={Name_screen} options={{ headerShown: false }} />
        <Stack.Screen name="Email_screen" component={Email_screen} options={{ headerShown: false }} />
        <Stack.Screen name="Cep_screen" component={Cep_screen} options={{ headerShown: false }} />
        <Stack.Screen name="Final_screen" component={Final_screen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

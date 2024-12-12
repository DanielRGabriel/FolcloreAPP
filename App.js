import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/index.js';
import QuizScreen from './screens/QuizScreen/index.js';
import SaibaMaisScreen from './screens/SaibaMaisScreen/index.js';
import CharactersScreen from './screens/CharacterScreen/index.js';
import CommemorativeDatesScreen from './screens/CommemorativeDateScreen/CommemorativeDateScreen.js';
import DiaDoFolcloreScreen from './screens/CommemorativeDateScreen/DiaDoFolcloreScreen.js';
import DiaDoSaciScreen from './screens/CommemorativeDateScreen/DiaDoSaciScreen.js';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Tela inicial */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Bem-vindo' }}
        />

        {/* Tela do Quiz */}
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ title: 'Quiz de Folclore' }}
        />
        <Stack.Screen name="SaibaMaisScreen" component={SaibaMaisScreen} />
        <Stack.Screen name="CharactersScreen" component={CharactersScreen} />
        <Stack.Screen
          name="CommemorativeDatesScreen"
          component={CommemorativeDatesScreen}
        />
        <Stack.Screen
          name="DiaDoFolcloreScreen"
          component={DiaDoFolcloreScreen}
        />
        <Stack.Screen name="DiaDoSaciScreen" component={DiaDoSaciScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

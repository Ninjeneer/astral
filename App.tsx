import Header from './components/Header';
import { LaunchData } from './types/launch.type';
import LaunchDetails from './screens/LaunchDetails';
import LaunchList from './screens/LaunchList';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  'launch-list': undefined,
  'launch-details': {
    launch: LaunchData
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="launch-list"
          component={LaunchList}
          options={{
            title: 'A.S.T.R.A.L',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 25 },
            statusBarStyle: 'inverted'
          }}></Stack.Screen>

        <Stack.Screen
          name="launch-details"
          component={LaunchDetails}
          options={{
            title: 'Détails du lancement',
            statusBarStyle: 'dark'
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;